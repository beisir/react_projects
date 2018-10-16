import React, {Component} from 'react';
import {post} from '../coomon';
import { Card, Row,  Col} from 'antd';
const { Meta } = Card;

class RightContent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            list: null
        }
    }

    async componentWillMount () {
        this.getProductList();
    }

    async componentWillReceiveProps () {
        this.getProductList();
    }

    async getProductList () {
        let list = await post('https://www.easy-mock.com/mock/5b39baec73a49f4fe3433dd9/xcx/postproject', {
            a: 'aaaa',
            b: '奥斯卡接电话看见爱上'
        });
        let template = list && list.map((res, index) => {
            return (<Col span={4} key={index}>
                <Card hoverable style={{ width: 240 }}
                    cover={<img alt="example" src={res.picpathm} />}>
                    <Meta title={res.title} description={res.title} />
                </Card>
            </Col>);
        });
        this.setState({template: template})
    }

    render () {
        let template = this.state.template;
        return (<div className="right-box">
            {this.props.match.params.id}
            <Row type="flex" justify="space-around">
                {template}
            </Row>
        </div>);
    }
}

export default RightContent;
