import React from 'react';
import PropTypes from 'prop-types';

/*
 * 需求：需要在Navbar组件显示Page组件的user：
 * 方法一：最简单的就是让Page传属性给Sidebar，然后Sidebar再传属性给Navbar。
 * 问题：这样的方式虽然比较简单，但是非常繁琐，需要层层传递属性，
 * 并且在Sidebar中并没有使用到user属性，所以是比较浪费性能的，并切性能也并不是很友好
 *
 * 方法二：使用context，context是一个可以在组件里声明的全局的，所有子元素都可以获取的属性
 * 只要定义了context，context属性对数据的校验是强要求的，因此需要需要引入prop-types
 *
 */

class Sidebar extends React.Component {
    render () {
        return (
            <div>
                <p>侧边栏</p>
                <Navbar/>
            </div>
        );
    }
}

class Navbar extends React.Component {
    // 定义属性数据类型
    static contextTypes = {
        user: PropTypes.string
    }

    // 获取context里的user数据
    render () {
        console.log(this.context);
        return (
            <div>{this.context.user}的导航栏</div>
        );
    }
}

class Page extends React.Component {
    // 定义属性的数据类型
    static childContextTypes = {
        user: PropTypes.string
    }

    constructor (props) {
        super(props);
        this.state = {user: 'self'}
    }

    // 定义context
    getChildContext () {
        return this.state;
    }

    render () {
        return (
            <div>
                <p>我是{this.state.user}</p>
                <Sidebar/>
            </div>
        );
    }
}

export default Page;