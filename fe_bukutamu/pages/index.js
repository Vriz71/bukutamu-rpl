import Head from 'next/head'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Guest Book | Dashboard</title>
      </Head>

      <div className="flex h-full">
        {/* Navbar */}
        <div className="flex flex-col w-80 px-4 py-8 border-r">
          <Navbar />
        </div>
        {/* Content */}
        <div className="w-full p-4 m-12 bg-slate-200 mt-28">
          <div className="mx-8 mt-5">
            <p className='font-Poppins font-bold text-3xl'>Dashboard</p>
            {/* Content 1 */}
            <div class="font-Poppins text-center block columns-3 gap-8 my-10">
              <div class="text-white rounded-lg p-1 drop-shadow-md bg-main-bg">
                <p class="text-lg font-normal mt-3">Total Guest</p>
                <div className='items-center flex justify-center'>
                  <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5987 14.0528C19.1736 14.0528 23.08 14.7781 23.08 17.6805C23.08 20.5816 19.1987 21.3333 14.5987 21.3333C10.0238 21.3333 6.11745 20.608 6.11745 17.7069C6.11745 14.8045 9.99872 14.0528 14.5987 14.0528ZM21.9134 12.3052C23.6625 12.2727 25.5428 12.5129 26.2376 12.6834C27.7097 12.9728 28.6779 13.5636 29.079 14.4222C29.4181 15.1271 29.4181 15.9448 29.079 16.6485C28.4654 17.9802 26.4871 18.4077 25.7183 18.5182C25.5595 18.5422 25.4318 18.4041 25.4485 18.2444C25.8413 14.5543 22.7169 12.8047 21.9087 12.4024C21.874 12.3844 21.8669 12.3568 21.8705 12.34C21.8728 12.328 21.8872 12.3088 21.9134 12.3052ZM7.09144 12.3027L7.4208 12.3057C7.44706 12.3093 7.4602 12.3285 7.46258 12.3393C7.46617 12.3573 7.459 12.3837 7.42557 12.4029C6.61613 12.8052 3.49177 14.5548 3.88456 18.2437C3.90127 18.4046 3.77472 18.5415 3.61593 18.5186C2.84708 18.4082 0.868839 17.9807 0.25519 16.649C-0.0850633 15.9441 -0.0850633 15.1276 0.25519 14.4227C0.65633 13.5641 1.62337 12.9733 3.09541 12.6827C3.79143 12.5134 5.67059 12.2732 7.4208 12.3057L7.09144 12.3027ZM14.5987 0C17.7135 0 20.2111 2.50969 20.2111 5.6438C20.2111 8.77671 17.7135 11.2888 14.5987 11.2888C11.4839 11.2888 8.98632 8.77671 8.98632 5.6438C8.98632 2.50969 11.4839 0 14.5987 0ZM22.2179 0.941194C25.2264 0.941194 27.5891 3.78831 26.7844 6.95965C26.2412 9.09469 24.2749 10.5128 22.0842 10.4552C21.8645 10.4492 21.6484 10.4288 21.4395 10.3928C21.2878 10.3663 21.2114 10.1946 21.2974 10.0673C22.1331 8.83051 22.6095 7.34271 22.6095 5.74563C22.6095 4.07891 22.0889 2.52506 21.1852 1.251C21.1565 1.21138 21.135 1.15013 21.1637 1.1045C21.1876 1.06728 21.2317 1.04807 21.2735 1.03846C21.578 0.976018 21.8907 0.941194 22.2179 0.941194ZM7.11457 0.941074C7.44169 0.941074 7.75449 0.975897 8.06012 1.03834C8.10071 1.04795 8.14608 1.06836 8.16995 1.10438C8.19741 1.15001 8.17712 1.21126 8.14846 1.25088C7.2447 2.52494 6.72418 4.07879 6.72418 5.74551C6.72418 7.34259 7.20053 8.83039 8.03624 10.0672C8.1222 10.1945 8.04579 10.3662 7.89417 10.3926C7.68405 10.4299 7.46915 10.4491 7.24948 10.4551C5.05873 10.5127 3.09242 9.09457 2.54921 6.95953C1.74335 3.78819 4.10602 0.941074 7.11457 0.941074Z" fill="white" />
                  </svg>
                  <p class="text-xl font-semibold my-4 ml-4"> 140 People</p>
                </div>
              </div>
              <div class="rounded-lg p-1 drop-shadow-md bg-green-bg">
                <p class="text-lg font-normal mt-3">Number of Active Guests</p>
                <div className='items-center flex justify-center'>
                  <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5987 14.0528C19.1736 14.0528 23.08 14.7781 23.08 17.6805C23.08 20.5816 19.1987 21.3333 14.5987 21.3333C10.0238 21.3333 6.11745 20.608 6.11745 17.7069C6.11745 14.8045 9.99872 14.0528 14.5987 14.0528ZM21.9134 12.3052C23.6625 12.2727 25.5428 12.5129 26.2376 12.6834C27.7097 12.9728 28.6779 13.5636 29.079 14.4222C29.4181 15.1271 29.4181 15.9448 29.079 16.6485C28.4654 17.9802 26.4871 18.4077 25.7183 18.5182C25.5595 18.5422 25.4318 18.4041 25.4485 18.2444C25.8413 14.5543 22.7169 12.8047 21.9087 12.4024C21.874 12.3844 21.8669 12.3568 21.8705 12.34C21.8728 12.328 21.8872 12.3088 21.9134 12.3052ZM7.09144 12.3027L7.4208 12.3057C7.44706 12.3093 7.4602 12.3285 7.46258 12.3393C7.46617 12.3573 7.459 12.3837 7.42557 12.4029C6.61613 12.8052 3.49177 14.5548 3.88456 18.2437C3.90127 18.4046 3.77472 18.5415 3.61593 18.5186C2.84708 18.4082 0.868839 17.9807 0.25519 16.649C-0.0850633 15.9441 -0.0850633 15.1276 0.25519 14.4227C0.65633 13.5641 1.62337 12.9733 3.09541 12.6827C3.79143 12.5134 5.67059 12.2732 7.4208 12.3057L7.09144 12.3027ZM14.5987 0C17.7135 0 20.2111 2.50969 20.2111 5.6438C20.2111 8.77671 17.7135 11.2888 14.5987 11.2888C11.4839 11.2888 8.98632 8.77671 8.98632 5.6438C8.98632 2.50969 11.4839 0 14.5987 0ZM22.2179 0.941194C25.2264 0.941194 27.5891 3.78831 26.7844 6.95965C26.2412 9.09469 24.2749 10.5128 22.0842 10.4552C21.8645 10.4492 21.6484 10.4288 21.4395 10.3928C21.2878 10.3663 21.2114 10.1946 21.2974 10.0673C22.1331 8.83051 22.6095 7.34271 22.6095 5.74563C22.6095 4.07891 22.0889 2.52506 21.1852 1.251C21.1565 1.21138 21.135 1.15013 21.1637 1.1045C21.1876 1.06728 21.2317 1.04807 21.2735 1.03846C21.578 0.976018 21.8907 0.941194 22.2179 0.941194ZM7.11457 0.941074C7.44169 0.941074 7.75449 0.975897 8.06012 1.03834C8.10071 1.04795 8.14608 1.06836 8.16995 1.10438C8.19741 1.15001 8.17712 1.21126 8.14846 1.25088C7.2447 2.52494 6.72418 4.07879 6.72418 5.74551C6.72418 7.34259 7.20053 8.83039 8.03624 10.0672C8.1222 10.1945 8.04579 10.3662 7.89417 10.3926C7.68405 10.4299 7.46915 10.4491 7.24948 10.4551C5.05873 10.5127 3.09242 9.09457 2.54921 6.95953C1.74335 3.78819 4.10602 0.941074 7.11457 0.941074Z" fill="#0EAD3B" />
                  </svg>
                  <p class="text-xl font-semibold my-4 ml-4"> 50 People</p>
                </div>
              </div>
              <div class="bg-white rounded-lg p-1 drop-shadow-md">
                <p class="text-lg font-normal mt-3">Total Guest for 1 Month</p>
                <div className='items-center flex justify-center'>
                  <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5987 14.0528C19.1736 14.0528 23.08 14.7781 23.08 17.6805C23.08 20.5816 19.1987 21.3333 14.5987 21.3333C10.0238 21.3333 6.11745 20.608 6.11745 17.7069C6.11745 14.8045 9.99872 14.0528 14.5987 14.0528ZM21.9134 12.3052C23.6625 12.2727 25.5428 12.5129 26.2376 12.6834C27.7097 12.9728 28.6779 13.5636 29.079 14.4222C29.4181 15.1271 29.4181 15.9448 29.079 16.6485C28.4654 17.9802 26.4871 18.4077 25.7183 18.5182C25.5595 18.5422 25.4318 18.4041 25.4485 18.2444C25.8413 14.5543 22.7169 12.8047 21.9087 12.4024C21.874 12.3844 21.8669 12.3568 21.8705 12.34C21.8728 12.328 21.8872 12.3088 21.9134 12.3052ZM7.09144 12.3027L7.4208 12.3057C7.44706 12.3093 7.4602 12.3285 7.46258 12.3393C7.46617 12.3573 7.459 12.3837 7.42557 12.4029C6.61613 12.8052 3.49177 14.5548 3.88456 18.2437C3.90127 18.4046 3.77472 18.5415 3.61593 18.5186C2.84708 18.4082 0.868839 17.9807 0.25519 16.649C-0.0850633 15.9441 -0.0850633 15.1276 0.25519 14.4227C0.65633 13.5641 1.62337 12.9733 3.09541 12.6827C3.79143 12.5134 5.67059 12.2732 7.4208 12.3057L7.09144 12.3027ZM14.5987 0C17.7135 0 20.2111 2.50969 20.2111 5.6438C20.2111 8.77671 17.7135 11.2888 14.5987 11.2888C11.4839 11.2888 8.98632 8.77671 8.98632 5.6438C8.98632 2.50969 11.4839 0 14.5987 0ZM22.2179 0.941194C25.2264 0.941194 27.5891 3.78831 26.7844 6.95965C26.2412 9.09469 24.2749 10.5128 22.0842 10.4552C21.8645 10.4492 21.6484 10.4288 21.4395 10.3928C21.2878 10.3663 21.2114 10.1946 21.2974 10.0673C22.1331 8.83051 22.6095 7.34271 22.6095 5.74563C22.6095 4.07891 22.0889 2.52506 21.1852 1.251C21.1565 1.21138 21.135 1.15013 21.1637 1.1045C21.1876 1.06728 21.2317 1.04807 21.2735 1.03846C21.578 0.976018 21.8907 0.941194 22.2179 0.941194ZM7.11457 0.941074C7.44169 0.941074 7.75449 0.975897 8.06012 1.03834C8.10071 1.04795 8.14608 1.06836 8.16995 1.10438C8.19741 1.15001 8.17712 1.21126 8.14846 1.25088C7.2447 2.52494 6.72418 4.07879 6.72418 5.74551C6.72418 7.34259 7.20053 8.83039 8.03624 10.0672C8.1222 10.1945 8.04579 10.3662 7.89417 10.3926C7.68405 10.4299 7.46915 10.4491 7.24948 10.4551C5.05873 10.5127 3.09242 9.09457 2.54921 6.95953C1.74335 3.78819 4.10602 0.941074 7.11457 0.941074Z" fill="black" />
                  </svg>
                  <p class="text-xl font-semibold my-4 ml-4"> 50 People</p>
                </div>
              </div>
            </div>


            {/* Content 2 */}
            <div className='font-Poppins'>
              <div className='flex justify-between w-96 items-center mt-20'>
                <p className='font-semibold text-2xl ml-1'>Recently Guest</p>
                <p className='text-md text-main-menu'>See more</p>
              </div>
              <div class="flex flex-row columns-2 gap-8 my-5">
                {/* Section 1 */}
                <div className='basis-1/2'>
                  <div class="bg-white flex py-5 items-center rounded-lg p-1 mb-5 drop-shadow-md">
                    <img src='logo.svg' className='ml-10' />
                    <div className='ml-5 font-medium'>
                      <p class="">Aprizal </p>
                      <p class="text-main-menu text-sm">2 minutes ago</p>
                    </div>
                  </div>
                  <div class="bg-white flex py-5 items-center rounded-lg p-1 mb-5 drop-shadow-md">
                    <img src='logo.svg' className='ml-10' />
                    <div className='ml-5 font-medium'>
                      <p class="">Ihsan Maulana</p>
                      <p class="text-main-menu text-sm">2 minutes ago</p>
                    </div>
                  </div>
                  <div class="bg-white flex py-5 items-center rounded-lg p-1 mb-5 drop-shadow-md">
                    <img src='logo.svg' className='ml-10' />
                    <div className='ml-5 font-medium'>
                      <p class="">Xenoverr</p>
                      <p class="text-main-menu text-sm">2 minutes ago</p>
                    </div>
                  </div>
                  <div class="bg-white flex py-5 items-center rounded-lg p-1 mb-5 drop-shadow-md">
                    <img src='logo.svg' className='ml-10' />
                    <div className='ml-5 font-medium'>
                      <p class="">Vriz</p>
                      <p class="text-main-menu text-sm">2 minutes ago</p>
                    </div>
                  </div>
                </div>
                {/* Section 2 */}
                <div class=" basis-3/4 drop-shadow-md">
                  <img src='cyberpunk.jpg' className='rounded-lg'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
