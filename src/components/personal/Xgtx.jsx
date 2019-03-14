import React,{Component} from 'react';
import "antd/dist/antd.css";
import './xgtx1.scss'
import { Upload, Icon, Modal } from 'antd'

class Comp extends Component{
  constructor(props){
    super(props);
    this.state={
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }]
    }
  }
  handleCancel (){
    this.setState({ previewVisible: false })
  }
  handlePreview (file) {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
    console.log(file)
  }
  handleChange ({ fileList }){
    this.setState({ fileList })
    console.log(this.state.fileList)
    this.state.fileList.map((item,index)=>{
      console.log(item.thumbUrl);
      return ''
    })
  }
  render(){
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div className="xgtx_list">
        <div className="clearfix">
          <Upload
            action="//jsonplaceholder.typicode.com/posts/"
            listType="picture-card"
            fileList={this.state.fileList}
            onPreview={this.handlePreview.bind(this)}
            onChange={this.handleChange.bind(this)}
          >
            {fileList.length >= 3 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel.bind(this)}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
      </div>
    )
  }
}

export default Comp