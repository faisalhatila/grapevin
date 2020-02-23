import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Image from '../../../assets/img/example-image.jpg';

export default class Data extends Component {
	state = {
		items: []
	};
	UNSAFE_componentWillMount() {
		fetch('http://server.pstech-usa.com/portfolios').then((res) => res.json()).then((data) =>
			this.setState({
				items: data
			})
		);

		// console.log(this.state);
		// console.log(this.state);
	}
	render() {
		console.log(this.state.items);
		const items = this.state.items;
		return (
			<Grid style={{ margin: '0 0 0 4%', fontFamily: 'sans-serif !important' }} container spacing={1}>
				{items.map((item, i) => {
					return (
						<Grid key={i} item lg={4} xs={12}>
							<figure className="imghvr-slide-left">
								<img
									sty={{ height: '260px !important', width: '260px !important' }}
									src={`http://server.pstech-usa.com/${item.Image}`}
								/>
								<figcaption style={{ opacity: 0.8 }}>
									{`${item.Name}`} <br />
									{` ${item.Description}`}
								</figcaption>
								<a href="#" />
							</figure>
						</Grid>
					);
				})}
			</Grid>
			// <div>
			// 	<Grid container spacing={1}>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 1</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 2</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 3</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 4</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 	</Grid>
			// 	<Grid container spacing={1}>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 5</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 6</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 7</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 8</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 	</Grid>
			// 	<Grid container spacing={1}>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 9</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 10</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 11</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 		<Grid item lg={3} xs={12}>
			// 			<figure className="imghvr-slide-left">
			// 				<img src={Image} />
			// 				<figcaption style={{ opacity: 0.8 }}>Item 12</figcaption>
			// 				<a href="#" />
			// 			</figure>
			// 		</Grid>
			// 	</Grid>
			// </div>
		);
	}
}
