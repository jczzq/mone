<template>
  <div class="nio-editable" v-loading="pending" @mouseleave="handleMouseLeave">
    <!-- Update / Delete -->
    <el-table
      ref="elTable"
      :row-key="primaryKey"
      v-bind="$attrs"
      :data="allRows"
      @current-change="currentChangeHandle"
      :row-class-name="rowClassNameHandle"
      :cell-class-name="cellClassNameHandle"
    >
      <el-table-column type="index" v-if="numberable"></el-table-column>
      <el-table-column type="selection" v-if="selectable"></el-table-column>
      <el-table-column
        v-for="field in visibleFields"
        :key="field.fieldKey"
        :label="field.caption"
        :prop="field.fieldKey"
        v-bind="visibleColumns[field.fieldKey]"
      >
        <template slot-scope="{ row }">
          <nio-field
            v-bind="field.attrs"
            :disabled="row._flag === 'delete-row'"
            :field-type="field.fieldType"
            v-model="row[field.fieldKey]"
          ></nio-field>
        </template>
      </el-table-column>

      <el-table-column v-if="actionBarVisible" v-bind="actionBar">
        <template slot-scope="slotScope">
          <slot name="action" v-bind="slotScope">
            <!-- 删除行 -->
            <el-button
              @click="delRow(slotScope)"
              size="mini"
              type="danger"
              :icon="`el-icon-${slotScope.row._flag === 'delete-row' ? 'remove-outline' : 'delete'}`"
            ></el-button>
            <!-- 新增行 -->
            <el-button
              v-if="slotScope.row[primaryKey] == null"
              @click="addNewRow(slotScope)"
              size="mini"
              type="primary"
              icon="el-icon-plus"
            ></el-button>
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
/**
 * TODO: 实行数据分割是为了缩小Observer单位，降低响应式数据渲染过程中的性能损耗
 * data => 10 length/table
 */
const deepCopy = obj => JSON.parse(JSON.stringify(obj));
const diff = (obj1, obj2) => {
  var o1 = obj1 instanceof Object;
  var o2 = obj2 instanceof Object;
  if (!o1 || !o2) {
    return obj1 === obj2;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (var attr in obj1) {
    const a = obj1[attr];
    const b = obj2[attr];
    var t1 = a instanceof Object;
    var t2 = b instanceof Object;
    if (t1 && t2) {
      const isSame = diff(a, b);
      if (!isSame) return false;
    } else if (a !== b) {
      return false;
    }
  }
  return true;
};
export default {
  name: "nio-editable",
  props: {
    data: {
      type: Array,
      required: true
    },
    blankRowsCount: {
      type: Number,
      default: 5
    },
    rowModel: {
      type: [Object, Function],
      default() {
        return {};
      }
    },
    rules: {
      type: Object,
      default() {
        return {};
      }
    },
    primaryKey: {
      type: String,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    hideFields: {
      type: Array,
      default() {
        return [];
      }
    },
    actionBarVisible: {
      type: Boolean,
      default: false
    },
    actionBar: {
      type: Object,
      default() {
        return {};
      }
    },
    selectable: Boolean,
    numberable: Boolean,
    pending: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const blankRowModel = typeof this.rowModel === "function" ? this.rowModel() : this.rowModel;
    const blankRows = Array.apply(null, { length: this.blankRowsCount }).map(() => {
      const row = deepCopy(blankRowModel);
      this.$set(row, "_flag", null);
      return row;
    });
    return {
      dataSnapshot: this.getDataDescriber(),
      blankRowModel,
      blankRows,
      // 列配置
      visibleColumns: {},

      currentCell: null,
      currentRow: null
    };
  },
  computed: {
    // 真正显示的字段 排除 hideFields
    visibleFields() {
      return this.fields.filter(f => !this.hideFields.includes(f.fieldKey));
    },
    visibleFieldKeys() {
      return this.visibleFields.map(f => f.fieldKey);
    },
    // 空行数组
    allRows() {
      return this.dataSnapshot.concat(this.blankRows);
    }
  },
  created() {
    this.init();
  },
  mounted() {},
  watch: {
    data(val) {
      if (val) {
        this.dataSnapshot = this.getDataDescriber();
      }
    }
  },
  methods: {
    // 初始化
    init() {
      this.visibleFields.forEach(f => {
        let columnProps = f.columnProps || {};
        columnProps.width = columnProps.width || "150";
        this.$set(this.visibleColumns, f.fieldKey, columnProps);
      });
    },
    // 重置状态
    clearStatus() {
      // 重置所有状态
      this.dataSnapshot.forEach(x => {
        x._flag = null;
      });
      // 重置新增行
      this.blankRows.forEach((x, i) => {
        if (x._flag) {
          const row = deepCopy(this.blankRowModel);
          this.$set(row, "_flag", null);
          this.blankRows.splice(i, 1, row);
        }
      });
    },
    setDesc(x) {
      if (x.hasOwnProperty("_flag")) {
        x._flag = null;
      } else {
        this.$set(x, "_flag", null);
      }
      return x;
    },
    getInsertRows() {
      return this.blankRows
        .filter(x => x._flag === "create-row")
        .map(x => {
          const y = { ...x };
          delete y._flag;
          return y;
        });
    },
    getDataDescriber() {
      return deepCopy(this.data).map(x => this.setDesc(x));
    },
    // 添加新行
    addNewRow({ $index }) {
      // TODO: 根据已有字段初始化 实体类 并继承CRUD类，new 实例时自带增删改方法
      const row = deepCopy(this.blankRowModel);
      this.$set(row, "_flag", null);
      this.blankRows.splice($index - this.data.length + 1, 0, row);
    },
    // 删除某行
    delRow({ row, $index }) {
      if ($index >= this.data.length) {
        if (this.blankRows.length > 1) {
          this.blankRows.splice($index - this.data.length, 1);
          if (row._flag === "create-row") {
            console.log("delRow", row);
            this.$emit("blank-row-change", this.getInsertRows());
          }
        }
      } else {
        // 撤销删除
        // 标记删除
        const originRow = this.findOriginRow(row);
        Object.assign(row, originRow);
        if (row._flag === "delete-row") {
          row._flag = null;
          this.$emit("delete-row", {
            cancel: true,
            row: originRow,
            rowIndex: $index
          });
        } else {
          row._flag = "delete-row";
          this.$emit("delete-row", {
            cancel: false,
            row: originRow,
            rowIndex: $index
          });
        }
      }
    },
    // 更换操作行时进行数据比对和校验
    currentChangeHandle(currentRow, oldCurrentRow) {
      this.currentRow = currentRow;
      if (oldCurrentRow) {
        if (oldCurrentRow._flag === "delete-row") return;

        // 验证行
        const _oldCurrentRow = deepCopy(oldCurrentRow);
        delete _oldCurrentRow._flag;

        // 判断是新增行还是修改行
        const isNewRow = oldCurrentRow[this.primaryKey] === null;
        // 新增行：修改了空行
        // 修改行：修改了数据行
        // console.log("isNewRow", isNewRow, this.blankRowModel, _oldCurrentRow);
        if (isNewRow) {
          const isModified = !diff(_oldCurrentRow, this.blankRowModel);
          // console.log(isModified);
          if (isModified) {
            oldCurrentRow._flag = "create-row";
          } else {
            oldCurrentRow._flag = null;
          }
          this.$emit("blank-row-change", this.getInsertRows());
        } else {
          let originRow = this.findOriginRow(_oldCurrentRow);
          if (originRow) {
            const isModified = !diff(_oldCurrentRow, originRow);
            if (isModified) {
              oldCurrentRow._flag = "update-row";
              this.$emit("edit-row", { row: _oldCurrentRow, cancel: false });
            } else {
              this.$emit("edit-row", { row: _oldCurrentRow, cancel: true });
              oldCurrentRow._flag = null;
            }
          }
        }
      }
    },
    handleMouseLeave() {
      this.currentChangeHandle(this.currentRow, this.currentRow);
    },
    // 根据row主键查找原始数据行
    findOriginRow(row) {
      return this.data.find(x => x[this.primaryKey] === row[this.primaryKey]);
    },
    rowClassNameHandle({ row }) {
      return row._flag;
    },
    cellClassNameHandle({ row, column }) {
      const property = column.property;
      if (row[this.primaryKey] && property && this.visibleFieldKeys.includes(property)) {
        const rule = this.rules[property];
        if (typeof rule === "object") {
          if (rule.some(x => x.required) && !row[property]) {
            return "error-cell";
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
.nio-editable {
  overflow-x: auto;
  .el-table::before {
    height: 0;
  }
  .el-table {
    &:not(:first-child) {
      border-top: none;
    }
  }
  // .el-table--scrollable-x:not(:last-child) .el-table__body-wrapper {
  //   overflow-x: hidden;
  // }
  .el-table__empty-block {
    display: none;
  }
  .el-input.is-disabled .el-input__inner {
    color: #adadad;
  }
  .create-row {
    background-color: #daf8df;
  }
  .update-row {
    background-color: #faf8c2;
  }
  .delete-row {
    background-color: #faf2f2;
  }
  .error-cell {
    position: relative;
    background-color: #faf2f2;
    // &::after {
    //   position: absolute;
    //   content: "必填项";
    //   display: inline-block;
    //   color: red;
    //   left: 8px;
    //   bottom: 1px;
    //   z-index: inherit;
    // }
  }
}
</style>
