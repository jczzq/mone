module.exports = {
  name: 'mone',
  build: {
    skipInstall: ['lazyload'],
    site: {
      publicPath: '/'
    },
    vetur: {
      tagPrefix: 'mone-'
    }
  },
  site: {
    defaultLang: 'en-US',
    versions: [{ label: '1.x', link: 'https://jczzq.github.io/mone/1.x/' }],
    baiduAnalytics: {
      seed: 'ad6b5732c36321f2dafed737ac2da92f'
    },
    locales: {
      'zh-CN': {
        title: 'MONE',
        description: '轻量、可靠的移动端 Vue 组件库',
        logo:
          /* eslint-disable-next-line */
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAk1BMVEUAAAASldkRltwRltsRltsTldwSltsSltsUlt4SltsRltwRltsSldwSjt0SltsSltwRltsSltsSltsSltsSltwSltsSltwQldsSltwRltsSltsRltwRldkOk94SltsSltsRltsRl9wSltwTldsSltsSltsSltsRltwSl9sRltsSldsSltsSltoTmt4SltsRltwSltsL/N7zAAAAMHRSTlMAgJAvaCSoUxfmzMBBB5qGeGHu0raycTz469qfHRHEuldLRzby4KSVKq+MT4sNblp/fWf0AAAC/0lEQVRYw6WX6XqqMBCGJ+wIsimC+1ZbrdXm/q/usIxkQ1KP748+zZN8n+MwM0EY5vBNVvAG6xOly3cMdrTCfsOA1Abua5p4GrKFUxsQYIShVl8pWNpGtcGFpWRD6UxjEFSKcowLr6wNFmNALtVqojEwaskUPzCkDUc+I77GwGwkBsDV2Pq0ZeEkZrXlNosYNIxaDZU4OfuM/umhWnSQDegYDxukoGXY4A098pJ+EtV/o5HewVj4sS3pL5YJ0CrsdCs7mMbSYvrfNsEpp/9si74TFEvOYWw1Qf0ITSfG/ig+LubdRD41lauH6T1QDWDtSAZ7ZuBNBb2YU7YSHe7A88U2FqAaIN/s1HwPIrNuy5MMxG5HRmdAlBhcGDA4f2BLjEEBmzeCIQOIn5aTjTvFsIFdCkNGbWNHrezeb5ooBnm7cdAZXNtzQf8ooyfQGUBG+ybT6o7VqTdwlMlyTr8CtKXfeoMEC2mzTK51GHZOOX71Bil/Pne5GlZzmM5pRWYpWWQsm/Jm7IBRbLq6DYFxEAQEDid+bbG0LimHw5K+EwJYVW3uzox8kkn1keCJOH78cxMrbh5Es8NKaUYHP2WBg80D8D5RYXHW6i3t0oYSKo45VhsW/DHAFmxGwFZqWsTsHoNnYFG6nP0JAzS7m8uUbzRMQjSbY4hjYXv2qDTMYaYMBPymKDdspd0xMB+zAzIhf6eE0EN4oYyeE1lXNk9v4LQb/5m62dUNWQ+8eBKKGHIO0VvzXuhytSlk8VxSjuKZvuBPBStOTwV8s19v+vTJBTalIh9Jnz75kI4Rcdj7pK5BZFso4bNXhMgjTSxXYA6BYUqh5JYw9Lm5NWpfMAICPWz5LxJZe/N2M/dWJAQPg/xQDVPQQIb1P6BjNWzgaQ3iYQOiNWjzVT4z8HX6EIfz0Zh3IqFKTI2B07XarbhHZRPNJ0nDrkqMP/zkybvVSHjp8hZ1D+mf4sQT49ny3ah/ji6RiyLi2pYQeAkXb6v/xm4v3DfIKfXX7xjYX9F++MQ/yo8R9hTV4+YAAAAASUVORK5CYII=',
        langLabel: '中文',
        links: [
          {
            logo: 'https://b.yzcdn.cn/mone/logo/github.svg',
            url: 'https://github.com/jczzq/mone'
          }
        ],
        searchConfig: {
          apiKey: '90067aecdaa2c85220e2783cd305caac',
          indexName: 'mone',
          placeholder: '搜索文档...'
        },
        nav: [
          {
            title: '开发指南',
            items: [
              {
                path: 'home',
                title: '介绍'
              },
              {
                path: 'quickstart',
                title: '快速上手'
              },
              {
                path: 'changelog',
                title: '更新日志'
              },
              {
                path: 'theme',
                title: '定制主题'
              },
              {
                path: 'contribution',
                title: '开发指南'
              },
              {
                path: 'style-guide',
                title: '风格指南'
              },
              {
                path: 'locale',
                title: '国际化'
              },
              {
                path: 'style',
                title: '公共样式'
              }
            ]
          },
          {
            title: '高阶组件',
            icon: 'peer-pay',
            items: [
              {
                path: 'view',
                title: 'View 视图'
              }
            ]
          },
          {
            title: '业务组件',
            icon: 'other-pay',
            items: [
              {
                path: 'address-edit',
                title: 'AddressEdit 地址编辑'
              }
            ]
          }
        ]
      }
    }
  }
};
