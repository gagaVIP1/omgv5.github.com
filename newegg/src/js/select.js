function $ (select) {
  if (typeof select != 'string') {//如果传入的非string return
    console.log('传入的参数有误')
    return null
  }
  var firstChar = select.charAt(0)//在字符串 "select" 中，我们将返回位置 0 的字符
  switch (firstChar) {
    case '#':
      return document.getElementById(select.substr(1))//substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。 此处1表示截取除了#之后的字符
      break
    case '.':
      if (document.getElementsByClassName) {//返回文档中所有指定类名的元素集合
        return document.getElementsByClassName(select.substr(1))//此处1表示截取除了.之后的字符
      } else {
        var result = []
        var allElemnts = document.getElementsByTagName('*')//返回带有指定标签名的对象的集合,*将返回文档中所有元素的列表,元素排列的顺序就是它们在文档中的顺序。
        console.log(allElemnts)
        for (var i = 0; i < allElemnts.length; i++) {//遍历allElemnts
          var e = allElemnts[i]
          var className = e.className
          var classArr = className.split(' ')//插入空格
          for (var j = 0; j < classArr.length; j++) {
            var c = classArr[j]
            if (c == select.substr(1)) {
              result.push(e)//在result数组注中添加e
              break
            }
          }
        }
        return result
      }
      break
    default :
      return document.getElementsByTagName(select)//返回带有指定标签名的对象的集合
  }
}