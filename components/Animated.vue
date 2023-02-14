<template>

	<kinesis-container class="w-full">

		<kinesis-element :strength="20" type="rotate">
			<svg xmlns="http://www.w3.org/2000/svg" width="196.57" height="191.63" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 196.57 191.63">
        <defs>
          <linearGradient id="blue-gradient">
            <stop offset="0%" stop-color="#007aff" />
            <stop offset="100%" stop-color="#0052cc" />
          </linearGradient>
          <linearGradient id="purple-gradient">
            <stop offset="0%" stop-color="#7b1fa2" />
            <stop offset="100%" stop-color="#4a148c" />
          </linearGradient>
        </defs>
        <g id="wheel_graphic"
            d="M102.66,124.9l32.15-58.27-36.74-.13-5.19-10.21h61.99l-.66,1.2-31.52,57.15,65.19,.19c1.56-6.73,2.41-13.73,2.41-20.94C190.28,42.8,148.89,1.38,97.82,1.38S5.35,42.8,5.35,93.89c0,10.82,1.32,15.69,2.48,21.1h56.91c3.84,0,6.77-.75,8.8-2.25,2.03-1.49,3.05-3.5,3.05-6s-.96-4.62-2.88-6.18c-1.92-1.55-5.28-3.01-10.09-4.39-8.38-2.29-14.71-5-19-8.15-4.29-3.15-6.42-7.44-6.42-12.9s2.45-9.91,7.37-13.38c4.91-3.47,11.19-5.19,18.83-5.19,.11,0,.22,0,.33,0h24.03s5.42,10.15,5.42,10.15h-29.45c-.19,0-.38,0-.58,0-3.77,0-6.69,.79-8.75,2.38-2.07,1.58-3.1,3.61-3.1,6.08,0,2.26,1.11,4.11,3.31,5.57,2.21,1.44,6.03,2.98,11.44,4.59,7.77,2.04,13.65,4.74,17.65,8.1,4,3.35,6,7.76,6,13.22s-2.38,10.2-7.13,13.49c-4.76,3.3-11.04,4.94-18.84,4.94H10.77c12.8,35.73,46.94,61.29,87.05,61.29s74.37-25.66,87.12-61.48H102.66Z" />
    
      </svg>
		</kinesis-element>


	</kinesis-container>

</template>

<script>
import { KinesisContainer,KinesisElement } from 'vue-kinesis'

export default {
	components: {
		KinesisContainer,
		KinesisElement
	}
}
</script>
<style>
 #wheel_graphic path{
	fill: url(#blue-gradient);
 }
 #wheel_graphic path:hover {
    fill: url(#purple-gradient);
  }

</style>
