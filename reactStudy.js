/** 
 * 1、React核心思想，封装组件,组件维护自己的状态和UI,状态改变,组件重新渲染
 * 2、
*/
import React, { Component } from 'react';
import { render } from 'react-dom';

/**
 * render会将这个组件显示到页面上的某个元素mountNode里面，
 * props 看作组建的配置属性
 */
class HelloMessage extends Component {
    render() {
        return <div>Hello{this.props.name}</div>
    }
}

/**
 * JXS 语法,使得JS支持嵌入HTML
 */

/**
 * Virtual DOM
 * 1、当组建状态state有更改的时候,React会自动调用组建的render方法重新渲染整个组建的UI
 * 2、由于大面积操作DOM，性能会有问题,
 * 3、使用vietual dom ，组建DOM结构就是映射在这个virtualDOM上,React在这个Virtual DOM
 *    上实现一个diff算法，当重新渲染组件的时候，会通过diff寻找要变更的DOM节点，再把这个修改更新到浏览器实际的DOM节点上(数据结构的思想)
 *
 */

/**
 * Data Flow
 * 1、单向数据绑定 先写好模板,然后把模板和数据整合到一起形成HTML代码,然后把这段HTML代码插入到文档流里面
 * 2、缺点:HTML代码一旦生成完以后，就没有办法再变，如果有新的数据来，就必须把之前的HTML代码去掉，再重新把新的数据和模板整合插入到文档流中
 * 3、双向数据绑定:数据模型和视图之间的双向绑定
 * 4、无法追踪局部状态的变化,暗箱操作，增加出错时debug的难度,由于组件数据变化来源入口不止一个，数据流转方向易絮乱
 */

/**
 * babel
 * 1、用于将es2015版本的代码转换成向后兼容的js语法，以便能够运行在当前和旧版本的浏览器或其它环境中
 * 2、语法转换,通过Polyfill方式在目标环境中添加缺失的特性3、源码转换
 */

/**
 * webpack
 * 1、可以看作模块打包机:分析项目结构，找到javascript 模块以及其它的一些浏览器不能直接运行的拓展语言，并将其转换和打包为合适的格式供浏览器使用
 */