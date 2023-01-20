import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import css from "./Register.module.css";

const RegisterModal = (props) => {
	const [isRegistered, setIsRegistered] = useState({
		fullname: "",
		username: "",
		email: "",
		password: "",
		list: "",
		gender: "",
		phone: "",
		address: "",
	});
	// Custom?

	const RegistSubmit = (e) => {
		if (!isRegistered.fullname) {
			alert("Form Fullname perlu diisi!");
		}
		if (!isRegistered.username) {
			alert("Form Username perlu diisi!");
		}
		if (!isRegistered.email) {
			alert("Form Email perlu diisi!");
		}

		if (!isRegistered.password) {
			alert("Form Password perlu diisi!");
		} else {
			props.onHide();
			localStorage.setItem("isRegistered", JSON.stringify(isRegistered));
			alert("Registration successful!");
		}
		if (!isRegistered.list) {
			alert("Form List As perlu diisi!");
		}
		if (!isRegistered.gender) {
			alert("Form Gender At perlu diisi!");
		}
		if (!isRegistered.phone) {
			alert("Form Phone At perlu diisi!");
		}
		if (!isRegistered.address) {
			alert("Form Address At perlu diisi!");
		}
		// setLoginModal(true);
	};
	const ListAsData = [{ value: "Tenant" }, { value: "Admin" }];
	const GenderData = [{ value: "Laki-laki" }, { value: "Perempuan" }];
	return (
		<Modal
			{...props}
			size='md'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Body className={css.Modal}>
				<h1 className='text-center mt-3 mb-5 fw-bold'>Sign up</h1>
				<Form className={css.Form}>
					<Form.Group className='mb-3'>
						<Form.Label htmlFor='fullname' className='fw-bold fs-4'>
							Full Name
						</Form.Label>
						<Form.Control
							autoFocus
							size='lg'
							type='text'
							id='fullname'
							placeholder='Fullname'
							className='bg-tertiary'
							name='fullname'
							value={isRegistered.fullname}
							onChange={(e) =>
								setIsRegistered({
									...isRegistered,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='username' className='fw-bold fs-4'>
							Username
						</Form.Label>
						<Form.Control
							size='lg'
							type='text'
							id='username'
							placeholder='Username'
							className='bg-tertiary'
							name='username'
							value={isRegistered.username}
							onChange={(e) =>
								setIsRegistered({
									...isRegistered,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='email' className='fw-bold fs-4'>
							Email
						</Form.Label>
						<Form.Control
							size='lg'
							type='email'
							id='email'
							placeholder='Email'
							className='bg-tertiary'
							name='email'
							value={isRegistered.email}
							onChange={(e) =>
								setIsRegistered({
									...isRegistered,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='password' className='fw-bold fs-4'>
							Password
						</Form.Label>
						<Form.Control
							size='lg'
							type='password'
							id='password'
							placeholder='Password'
							className='bg-tertiary'
							name='password'
							value={isRegistered.password}
							onChange={(e) =>
								setIsRegistered({
									...isRegistered,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='list' className='fw-bold fs-4'>
							List As
						</Form.Label>
						<Form.Select
							size='lg'
							id='list'
							name='list'
							value={isRegistered.list}
							className='bg-tertiary'
							// defaultValue={ListAsData[0].value}
							onChange={(e) =>
								setIsRegistered({
									...isRegistered,
									[e.target.name]: e.target.value,
								})
							}
						>
							{ListAsData.map((option, idk) => (
								<option key={idk}>{option.value}</option>
							))}
						</Form.Select>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='gender' className='fw-bold fs-4'>
							Gender
						</Form.Label>
						<Form.Select
							size='lg'
							id='gender'
							name='gender'
							value={isRegistered.gender}
							className='bg-tertiary'
							// defaultValue={GenderData[0].value}
							onChange={(e) =>
								setIsRegistered({
									...isRegistered,
									[e.target.name]: e.target.value,
								})
							}
						>
							{GenderData.map((option, idk) => (
								<option key={idk}>{option.value}</option>
							))}
						</Form.Select>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='phone' className='fw-bold fs-4'>
							Phone
						</Form.Label>
						<Form.Control
							size='lg'
							type='text'
							id='phone'
							placeholder='Phone'
							className='bg-tertiary'
							name='phone'
							value={isRegistered.phone}
							onChange={(e) =>
								setIsRegistered({
									...isRegistered,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group className='mb-3'>
						<Form.Label htmlFor='address' className='fw-bold fs-4'>
							Address
						</Form.Label>
						<Form.Control
							size='lg'
							as='textarea'
							rows='4'
							id='address'
							placeholder='Address'
							name='address'
							value={isRegistered.address}
							className='bg-tertiary'
							onChange={(e) =>
								setIsRegistered({
									...isRegistered,
									[e.target.name]: e.target.value,
								})
							}
						/>
					</Form.Group>

					<Form.Group className='ms-auto mb-4'>
						<Button
							size='lg'
							type='button'
							className='mt-4 py-3 px-4 w-100'
							onClick={RegistSubmit}
						>
							Apply
						</Button>
					</Form.Group>

					<Form.Text id='passwordHelpBlock' muted>
						Don't have an acount? Click <span>here</span>
					</Form.Text>
				</Form>
			</Modal.Body>
		</Modal>
	);
};

export default RegisterModal;
