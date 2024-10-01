import React from 'react';
import './styles.css';

class Design extends React.Component{

render() {
    return (
      <article id="articles">

        <div>
          <img src={this.props.thumbnail} alt={this.props.title} />
        </div>

        <div className="article-infos">
          <h2>{this.props.title}</h2>
          <h3>{this.props.provider}</h3>
          <p>{this.props.description}</p>
          
        </div>
      </article>
    );
  }
}

export default Design;