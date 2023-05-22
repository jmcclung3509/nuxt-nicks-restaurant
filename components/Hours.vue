<template>
	<section id="hours" class="hours section-container space-y-14 animate">
		<h1 class=" text-4xl lg:text-5xl w-full flex flex-start items-centertext-[#004170]"> HOURS</h1>
		<div class="hours-container w-full flex flex-col  justify-between lg:flex-row space-y-14 lg:space-y-0">
			<div class="hours restaurant-hours flex flex-wrap justify-start basis-1 lg:basis-1/3 space-y-7">
				<h2 class="w-full text-3xl pb-4 "> Restaurant</h2>
				<div class="hour-content-container restaurant-content flex flex-col justify-start  w-full space-y-7">
					<div class="flex justify-between">
						<p class="text-left">Mon & Thurs: </p>
						<p class="text-right">11am - 9pm</p>
					</div>
					<div class="flex justify-between">
						<p class="text-left">Tues & Wed </p>
						<p class="text-right red">Closed</p>
					</div>
					<div class="flex justify-between">
						<p class="text-left">Fri & Sat: </p>
						<p class="text-right">10am - 10pm</p>
					</div>
					<div class="flex justify-between">
						<p class="text-left">Sun </p>
						<p class="text-right">10am -9pm</p>
					</div>


				</div>
			</div>
			<div class="hours bar-hours flex flex-wrap justify-start basis-1 lg:basis-1/3 space-y-7">
				<h2 class="w-full text-3xl  pb-4 text-right "> Bar & Lounge</h2>
				<div class="hour-content-container restaurant-content flex flex-col justify-start  w-full space-y-7">
					<div class="flex justify-between">
						<p class="text-left">Mon & Thurs: </p>
						<p class="text-right">11am - 11pm</p>
					</div>
					<div class="flex justify-between">
						<p class="text-left">Tues & Wed </p>
						<p class="text-right red">Closed</p>
					</div>
					<div class="flex justify-between">
						<p class="text-left">Fri & Sat: </p>
						<p class="text-right">10am - 11pm</p>
					</div>
					<div class="flex justify-between">
						<p class="text-left">Sun </p>
						<p class="text-right">10am -10pm</p>
					</div>

				</div>

			</div>

		</div>
			<div class="w-full space-y-4 extras flex items-center justify-content flex-col">

					<div class="text-center space-y-4">
						<nuxt-link  to="/menu#music"> <span class="underline-link gradient-text text-3xl"> Live Music </span> </nuxt-link>
						<p class="text-2xl"  > Friday & Saturday 7-11pm </p>
					</div>
					<div class="text-center space-y-4">
						<nuxt-link to="/menu#happy-hour"><span class="underline-link text-3xl gradient-text"> Happy Hour </span> </nuxt-link> <p class="text-2xl"  > Monday & Thursday 3-6pm </p>
					</div>
				</div>
	</section>
</template>