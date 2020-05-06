import React, {Component} from 'react';

class Contact extends Component {
  render() {
    const { data } = this.props;
    return (
      <article key={data.id} data-testid="contact" className="contact">
        <img alt="avatar" src={data.avatar} className="contact__avatar" />
        <span className="contact__data">{data.name}</span>
        <span className="contact__data">{data.phone}</span>
        <span className="contact__data">{data.country}</span>
        <span className="contact__data">{data.admissionDate.slice(0, 10)}</span>
        <span className="contact__data">{data.company}</span>
        <span className="contact__data">{data.department}</span>
      </article>
    );
  }
}

export default Contact;
