/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe9d824ba8d0fcd82',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '57d548be1e81d6d6c01ba6f9a770f05b',

  PROVINCE: '湖南',
  CITY: '株洲',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDPNj6r3Lks1yXYObbpdqhlh3OCg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '-C_KNFEYo0QY4az26rMb3cp43STMbmy_wRCZX6Y_R4Vk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '5-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '04-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '2002', date: '05-20',
        },
       
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2017-09-13' },
        
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '-C_KNFEYo0QY4az26rMb3cp43STMbmy_wRCZX6Y_R4Vk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oDPNj6r3Lks1yXYObbpdqhlh3OCg',
    }
  ],

}
 {{note_en.DATA}} 
{{note_ch.DATA}}

module.exports = USER_CONFIG

