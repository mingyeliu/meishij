const reducer = (state = {
  data:'',
  data1:[]
}, action) =>{    // 纯函数输入确定，输出就一定确定
  const {type, data} = action; // type表示你要做的事行为，data就是传递过来的数据
  switch (type) {
    // 当state变化时需要返回全新的对象，而不是修改传入的参数
    case 'Denglu':
      return {
        data:data
      }
    case 'Denglu1':
      return {
        data1:data
      }
    default:
    return state;
  }
}
export default reducer;
