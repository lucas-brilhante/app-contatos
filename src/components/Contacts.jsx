import React, { Component } from "react";
import { Contact } from '.';

class Contacts extends Component {

	render() {
		return (
			<div data-testid="contacts" className="container">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{this.props.contacts && this.props.contacts.map((contact) =>
						<Contact key={contact.id} data={contact} />

					)}
				</section>
			</div>
		);
	}
}

export default Contacts;
