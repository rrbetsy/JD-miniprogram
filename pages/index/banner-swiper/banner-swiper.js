Component({
  data: {
    // 轮播图
    imgUrls: [
      '//imgcps.jd.com/ling4/4938552/54mb5aW25Lmz5ZOB54m55Y2W/5paw5qy-55u06ZmN/p-5c13869682acdd181deefedf/9cf5ecc2/cr_1125x549_0_72/s1125x690/q70.jpg',
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/73882/21/1179/95457/5cf63648E9b3220e4/3a9cfd61213976f1.jpg!cr_1125x549_0_72!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/20589/32/6460/118373/5c52506cEa08ccedb/0254cba485b06d16.jpg!cr_1125x549_0_72!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/36425/18/13387/173153/5d134619E0249abfe/123710b155e960b7.jpg!cr_1125x549_0_72!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/76414/32/1272/134870/5cf7ce54E7d270b04/bfe4d66efc0b3e16.jpg!cr_1125x549_0_72!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/39161/27/11120/145814/5d2465b7E4a2c09d4/3d69d078ab300781.jpg!cr_1125x549_0_72!q70.jpg.dpg',
      '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/29602/28/6448/147417/5c5018e1Ed6bdfbfe/44777b12d731ad4b.jpg!cr_1125x549_0_72!q70.jpg.dpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 500
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function() {}
  }
})