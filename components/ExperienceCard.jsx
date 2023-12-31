import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";
import Image from "next/image";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="4">
			<Fade left duration={1000} distance="40px">
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover shadow border-0 text-center rounded"
				>
					<Color src={data.companylogo} format="hex">
						{(color) => (
							<CardHeader style={{ background: color.data }}>
								<h5 className="text-white">{data.company}</h5>
							</CardHeader>
						)}
					</Color>
					<CardBody className="py-5">
						<div
							className="bg-white mb-3 img-center img-fluid shadow-lg "
							style={{ width: "300px", height: "100px", paddingTop: '15px' }}
						>
							<img
								src={data.companylogo}
								width={"180px"}
								height={"70px"}
								alt={""}
							/>
						</div>
						<CardTitle tag="h5">{data.role}</CardTitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText className="description my-3 text-left">
							{data.desc}
							<ul>
								{data.descBullets
									? data.descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</CardText>
					</CardBody>
				</Card>
			</Fade>
		</Col>
	);
};

export default ExperienceCard;
