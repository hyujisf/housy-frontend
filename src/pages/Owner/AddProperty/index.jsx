import React from "react";
import Layout from "layouts/withoutSearchbar";
import { Form, Col, Button } from "react-bootstrap";

import css from "./index.module.css";

export default function AddProperty() {
	const cities = [
		{ value: "-" },
		{ value: "Jakarta" },
		{ value: "Bandung" },
		{ value: "Medan" },
	];
	const period = [
		{ value: "-" },
		{ value: "Day" },
		{ value: "Week" },
		{ value: "Month" },
		{ value: "Year" },
	];
	const nums = [
		{ value: "-" },
		{ value: 1 },
		{ value: 2 },
		{ value: 3 },
		{ value: 4 },
		{ value: 5 },
	];
	return (
		<Layout className={"bg-tertiary"}>
			<div className={css.MaxWidth}>
				<div className={css.Card}>
					<h2 className='fw-bold fs-1 my-4'>Add Property</h2>
					<Form className='fw-bold'>
						<Form.Group className='mb-3'>
							<Form.Label>Name Property</Form.Label>
							<Form.Control
								size='lg'
								id='name-property'
								name='name-property'
								type='text'
								className='bg-tertiary'
								autoFocus
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>City</Form.Label>
							<Form.Select
								size='lg'
								id='cities'
								name='cities'
								type='text'
								className='bg-tertiary'
							>
								{cities.map((e, k) => {
									return <option key={k}>{e.value}</option>;
								})}
							</Form.Select>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Address</Form.Label>
							<Form.Control
								size='lg'
								as='textarea'
								rows={3}
								id='address'
								name='address'
								type='text'
								className='bg-tertiary'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Price</Form.Label>
							<Form.Control
								size='lg'
								id='price'
								name='price'
								type='text'
								className='bg-tertiary'
							/>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Type of Rent</Form.Label>
							<Form.Select
								size='lg'
								id='cities'
								name='cities'
								type='text'
								className='bg-tertiary'
							>
								{period.map((e, k) => {
									return <option key={k}>{e.value}</option>;
								})}
							</Form.Select>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Amenities</Form.Label>
							<div
								className='d-flex gap-5'
								style={{ fontWeight: "500", fontSize: "1.2rem" }}
							>
								<Form.Check
									//   style={{ fontWeight: "300", fontSize: "1.2rem" }}
									id='furnished'
									label='Furnished'
								/>
								<Form.Check
									//   style={{ fontWeight: "300", fontSize: "1.2rem" }}
									id='pet-allowed'
									label='Pet Allowed'
								/>
								<Form.Check
									//   style={{ fontWeight: "500", fontSize: "1.2rem" }}
									id='shared-accomodation'
									label='Shared Acconodation'
								/>
							</div>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Bed Room</Form.Label>
							<Form.Select
								size='lg'
								id='bed-room'
								name='bed-room'
								type='text'
								className='bg-tertiary'
							>
								{nums.map((e, k) => {
									return <option key={k}>{e.value}</option>;
								})}
							</Form.Select>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Bath Room</Form.Label>
							<Form.Select
								size='lg'
								id='bath-room'
								name='bath-room'
								type='text'
								className='bg-tertiary'
							>
								{nums.map((e, k) => {
									return <option key={k}>{e.value}</option>;
								})}
							</Form.Select>
						</Form.Group>
						<Col className='d-flex mb-5 justify-content-end'>
							<Button size='lg' type='submit' className='click px-5 py-2'>
								Save
							</Button>
						</Col>
					</Form>
				</div>
			</div>
		</Layout>
	);
}
