import React, {Component} from 'react';
import { Upload, Icon, Modal } from 'antd';

class UploadTest extends Component {
    constructor (props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }]
        };
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview (file) {
        console.log(file);
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange (options) {
        this.setState({
            fileList: options.fileList
        });
    }


    render () {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (<div className="clearfix">
                <Upload
                    action="//10.158.33.180/upload/imgupload"
                    multiple={true}
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview.bind(this)}
                    onChange={this.handleChange.bind(this)}>
                    {fileList.length >= 3 ? null : uploadButton}
                </Upload>

                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
        </div>);
    }
}

export default UploadTest;
