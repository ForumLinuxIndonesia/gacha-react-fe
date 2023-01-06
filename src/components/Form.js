import React, { useState } from "react";
import * as md from "react-icons/md";
import Button from "./elements/Button/Button";

export function LoginForm() {
	const [pwdView, setPwdView] = useState(0);

	function toggleView() {
		setPwdView(pwdView === "password" ? "text" : "password");
	}

	return (
		<section className="relative pb-20">
			<div className="hidden lg:block absolute inset-0 w-1/2 ml-auto">
				<div
					className="flex items-center h-full wow animate__ animate__fadeIn  animated animated"
					data-wow-delay=".1s"
					style={{
						visibility: "visible",
						animationDelay: ".1s",
						animationName: "fadeIn",
					}}>
					<img className="lg:max-w-lg mx-auto" src="/imgs/illustrations/login.svg"></img>
				</div>
			</div>
			<div className="container">
				<div className="relative flex flex-wrap pt-12">
					<div className="lg:flex lg:flex-col w-full lg:w-1/2 py-6 lg:pr-20">
						<div
							className="w-full max-w-lg mx-auto lg:mx-0 my-auto wow animate__ animate__fadeIn  animated animated"
							data-wow-delay=".3s"
							style={{ visibility: "visible", animationDelay: ".3s", animationName: "fadeIn" }}>
							<span className="text-sm ">Masuk</span>
							<h4 className="mb-6 text-3xl">Gabung dengan komunitas kami</h4>
							<div className="flex mb-4 px-4 bg-blueGray-50 rounded border items-center border-gray-200">
								<input className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none" placeholder="name@email.com" />
								<md.MdAlternateEmail stroke="currentColor" className="text-blueGray-300" />
							</div>
							<div className="flex mb-4 px-4 bg-blueGray-50 rounded border items-center border-gray-200">
								<input
									className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
									type={pwdView ? pwdView : "password"}
									placeholder="Enter your password"
								/>
								<md.MdRemoveRedEye stroke="currentColor" className="text-blueGray-300 cursor-pointer" onClick={() => toggleView()} />
							</div>
							<div className="float-left mb-6 wow animate__ animate__fadeIn" data-wow-delay=".1s" style={{ visibility: "visible", animationDelay: ".1s", animationName: "fadeIn" }}>
								<label className="inline-flex text-xs">
									<input className="" type={"checkbox"} defaultChecked={true} />
									<span className="ml-2 flex gap-1">
										I agree to
										<a className="underline hover:text-blueGray-500" href="#">
											Police privacy
										</a>
										and
										<a className="underline hover:text-blueGray-500" href="#">
											Term of use
										</a>
									</span>
								</label>
							</div>
							<Button
								label="Masuk"
								size="xl"
								className="transition justify-center duration-300 ease-in-out transform hover:-translate-y-1 block w-full p-4 text-center font-semibold leading-none text-base"
								variant="primary"></Button>
							<p className="my-6 text-xs text-blueGray-400 text-center font-semibold">atau lanjutkan dengan</p>
							<button
								className="transition duration-300 ease-in-out transform justify-center hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded"
								href="#">
								<img className="h-6 pr-4" src="/imgs/logos/facebook-sign.svg" />
								<span>Masuk Dengan Facebook</span>
							</button>
							<button
								className="transition duration-300 ease-in-out transform justify-center hover:-translate-y-1 flex items-center w-full px-4 py-3 mb-2 text-xs text-blueGray-500 font-semibold leading-none border border-gray-200 hover:bg-blueGray-50 rounded"
								href="#">
								<img className="h-6 pr-4" src="/imgs/logos/google-sign.svg" />
								<span>Masuk Dengan Google</span>
							</button>
							<div className="w-full mt-12 flex text-center justify-center">
								<p className="flex gap-2 items-center">
									Belum punya akun?
									<a
										className="inline-block text-xs text-blue-600 hover:text-blue-700 font-semibold leading-none wow animate__ animate__fadeIn  animated animated"
										data-wow-delay=".1s"
										href="/daftar"
										style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>
										Daftar Sekarang
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
