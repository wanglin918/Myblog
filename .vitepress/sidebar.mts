import { set_sidebar } from "../utils/set_sidebar";	// 改成自己的路径
export default{
    
    // '/cloudsec/docker':[
    //   {
    //     text:'index',
    //     link: '/cloudsec/docker/index',
    //   },
    //   {
    //     text:'a',
    //     link: '/cloudsec/docker/a',
    //   },
    //   {
    //     text:'b',
    //     link: '/cloudsec/docker/b',
    //   }
    // ],
    // '/cloudsec/k8s':[
    //   {
    //     text:'index',
    //     link: '/cloudsec/k8s/index',
    //   },
    //   {
    //     text:'111',
    //     link: '/cloudsec/k8s/1',
    //   },
    //   {
    //     text:'222',
    //     link: '/cloudsec/k8s/2',
    //   }
    // ],
      // //分组标题
      // text: '云安全',
      // items: [
      //   { text: '前言', link: '/cloudsec/index' },
      //   { text: 'docker', link: '/cloudsec/docker' },
      //   { text: 'k8s', link: '/cloudsec/k8s' },
      // ],

    "/cloudsec": set_sidebar("docs/cloudsec"), 
  }