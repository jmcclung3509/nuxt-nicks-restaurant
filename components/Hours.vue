<template>
	<section id="hours" class="hours section-container space-y-14">
		<h1 class="text-5xl w-full flex flex-start items-center"> HOURS</h1>
		<div class="hours-container w-full flex flex-col  justify-between lg:flex-row ">
			<div class="hours restaurant-hours flex flex-wrap justify-start basis-1 lg:basis-1/3 space-y-14">
				<h2 class="w-full text-3xl"> Restaurant</h2>
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
				<!-- <div class="hours-image restaurant-image  basis-1 lg: basis-1/2">
				<img src="~/assets/images/homepage/crab-sandwich.png">
			</div> -->

			</div>
			<div class="hours bar-hours flex flex-wrap justify-start basis-1 lg:basis-1/3 space-y-7">
				<h2 class="w-full text-3xl text-right"> Bar & Lounge</h2>
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
				<!-- <div class="hours-image bar-image  basis-1 lg: basis-1/2">
				<img src="~/assets/images/homepage/mule.png">
			</div> -->

			</div>
		</div>
	</section>
</template>