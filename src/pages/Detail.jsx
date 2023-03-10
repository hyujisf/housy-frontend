import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

import { IoBed } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";

import { useQuery } from "react-query";
import { API } from "lib/api";
import css from "./Detail.module.css";

import Layout from "layouts/withoutSearchbar";
import OrderModal from "components/Modals/Detail";

export default function Detail(props) {
	const [showModal, setShowModal] = useState(false);
	const { id } = useParams();

	let { data: property } = useQuery("getpropertyCache", async () => {
		const response = await API.get("/property/" + id);
		return response.data.data;
	});

	console.log("data showed", property);

	return (
		<Layout className={"bg-white"}>
			<div className={css.MaxWidth} style={{ marginTop: "4rem" }}>
				<div className='d-flex flex-column gap-3 w-100'>
					<div className={css.WrapperPrimaryImage}>
						<Image
							src={"http://localhost:5000/uploads/" + property?.image}
							className={css.PrimaryImage}
						/>
					</div>
					<div className='d-flex gap-3'>
						<div className={css.WrapperSubImage}>
							<Image
								src={process.env.PUBLIC_URL + "/img/rooms/image3.png"}
								className={css.PrimaryImage}
							/>
						</div>
						<div className={css.WrapperSubImage}>
							<Image
								src={process.env.PUBLIC_URL + "/img/rooms/image7.png"}
								className={css.PrimaryImage}
							/>
						</div>
						<div className={css.WrapperSubImage}>
							<span className={css.ImageMore}>+5</span>
							<Image
								src={process.env.PUBLIC_URL + "/img/rooms/image6.png"}
								className={css.PrimaryImage}
							/>
						</div>
					</div>
				</div>
				<div className={css.WrappingBookingDesc}>
					<h1 className={css.BookingTitle}>{property?.name}</h1>
					<div className={css.BookingDesc}>
						<div>
							<h3 className='fw-bold'>
								{property?.price} / {property?.type_rent}
							</h3>
							<p className='text-secondary' style={{ width: "360px" }}>
								{property?.address}, <br /> {property?.district},{" "}
								{property?.city.name}
							</p>
						</div>
						<div className=' d-flex gap-3'>
							<div className='fw-semibold'>
								<small className='text-secondary'>Bedrooms</small>
								<span className='d-flex align-items-center gap-2 fs-4'>
									{property?.bedroom} <IoBed />
								</span>
							</div>
							<div className='fw-semibold'>
								<small className='text-secondary'>Bathrooms</small>{" "}
								<span className='d-flex align-items-center gap-2 fs-4'>
									{property?.bathroom} <GiBathtub />
								</span>
							</div>
							<div className='fw-semibold'>
								<small className='text-secondary'>Area</small>{" "}
								<span className='d-flex align-items-center gap-2 fs-4'>
									{property?.size} sqft
								</span>
							</div>
						</div>
					</div>
					<div className=''>
						<h3 className='fw-bold'>Description</h3>
						<p className='text-secondary'>{property?.description}</p>
					</div>
					<div className='d-flex w-100 justify-content-end'>
						<Button
							size='lg'
							variant='primary'
							className='px-5 py-2'
							onClick={() => setShowModal(true)}
							// onClick={() => setRegisterModal(true)}
						>
							BOOK NOW
						</Button>
					</div>
					{/* <Link to='/'>back to home</Link> */}
				</div>

				<OrderModal
					show={showModal}
					// roomID={property?}
					// gotoregister={gotoRegistration}
					onHide={() => setShowModal(false)}
				/>
			</div>
		</Layout>
	);
}
