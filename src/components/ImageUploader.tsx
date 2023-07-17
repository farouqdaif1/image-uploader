import { useRef } from 'react'
interface  ChildProps {
    upLoadImage(files: FileList | null) : void;
}
  
function ImageUploader( { upLoadImage }: ChildProps) {
    const inputRef = useRef<HTMLInputElement>(null)
    
    const handelDragOver = (event:  React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }
    const handelDrop = (event:  React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        upLoadImage(event.dataTransfer.files)
    }


    return (
        <>
            
                <div className="container">
                <h1>Upload your image</h1>
                <p>File should be Jpeg, Png,...</p>
                <div className='drop_zone' onDragOver={handelDragOver} onDrop={handelDrop} >
                <div className="svg">
                    <svg width="130px" height="105px" viewBox="0 0 115 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M76.2516 6.88867C74.9034 6.88767 73.5734 7.19941 72.3662 7.79935C71.159 8.39929 70.1076 9.27106 69.2947 10.3461C68.4222 9.9708 67.4701 9.81796 66.5239 9.90125C65.5778 9.98455 64.6671 10.3014 63.8736 10.8233C63.0802 11.3452 62.4289 12.0559 61.9781 12.8915C61.5273 13.7271 61.2912 14.6615 61.291 15.6109H84.9786C84.9786 14.4654 84.7529 13.3313 84.3143 12.273C83.8757 11.2148 83.2329 10.2533 82.4225 9.44334C81.6121 8.63341 80.6501 7.99093 79.5913 7.5526C78.5325 7.11427 77.3976 6.88867 76.2516 6.88867Z" fill="#E6E6E6" />
                        <path d="M108.974 0.853516H5.30199C3.91558 0.855477 2.58652 1.40679 1.60618 2.38659C0.625845 3.36639 0.0742285 4.69472 0.0722656 6.08036V83.8681C0.0742278 85.2537 0.625845 86.5821 1.60618 87.5619C2.58652 88.5417 3.91558 89.093 5.30199 89.0949H108.974C110.36 89.093 111.689 88.5417 112.669 87.5619C113.65 86.5821 114.201 85.2537 114.203 83.8681V6.08036C114.201 4.69472 113.65 3.36639 112.669 2.38659C111.689 1.40679 110.36 0.855477 108.974 0.853516V0.853516ZM113.588 83.8681C113.587 85.0908 113.1 86.263 112.235 87.1276C111.37 87.9921 110.197 88.4785 108.974 88.48H5.30199C4.07861 88.4785 2.90577 87.9921 2.04071 87.1276C1.17565 86.263 0.689012 85.0908 0.687524 83.8681V6.08036C0.689012 4.85766 1.17565 3.68546 2.04071 2.82088C2.90577 1.9563 4.07861 1.46992 5.30199 1.46843H108.974C110.197 1.46992 111.37 1.9563 112.235 2.82088C113.1 3.68546 113.587 4.85766 113.588 6.08036V83.8681Z" fill="#BDBDBD" />
                        <path d="M80.21 56.8114C93.0375 56.8114 103.436 46.4185 103.436 33.5981C103.436 20.7777 93.0375 10.3848 80.21 10.3848C67.3826 10.3848 56.9839 20.7777 56.9839 33.5981C56.9839 46.4185 67.3826 56.8114 80.21 56.8114Z" fill="#95BDF4" />
                        <path d="M113.661 65.898C114.014 66.4022 114.203 67.0026 114.203 67.6179V70.1077C114.203 71.7646 112.86 73.1077 111.203 73.1077H3.07227C1.41541 73.1077 0.0722656 71.7646 0.0722656 70.1077V67.5817C0.0722656 66.9698 0.259419 66.3725 0.608618 65.8699L0.687532 65.7563L36.8711 13.6816C37.0352 13.4453 37.2541 13.2523 37.5091 13.119C37.7641 12.9856 38.0477 12.916 38.3354 12.916C38.6232 12.916 38.9067 12.9856 39.1617 13.119C39.4167 13.2523 39.6356 13.4453 39.7998 13.6816L61.6128 45.0704C62.8033 46.7835 65.3354 46.7887 66.5329 45.0805L81.3391 23.96C81.5034 23.7251 81.7221 23.5332 81.9765 23.4007C82.2309 23.2682 82.5135 23.1991 82.8003 23.1991C83.0872 23.1991 83.3698 23.2682 83.6242 23.4007C83.8786 23.5332 84.0972 23.7251 84.2616 23.96L113.588 65.7932L113.661 65.898Z" fill="#828282" />
                        <path d="M25.1431 80.4863H6.99368C6.91226 80.4861 6.83426 80.4536 6.77678 80.3959C6.71929 80.3382 6.68701 80.2601 6.68701 80.1787C6.68701 80.0973 6.71929 80.0192 6.77678 79.9615C6.83426 79.9039 6.91226 79.8713 6.99368 79.8711H25.1431C25.2247 79.8711 25.3029 79.9035 25.3606 79.9612C25.4183 80.0189 25.4507 80.0971 25.4507 80.1787C25.4507 80.2603 25.4183 80.3385 25.3606 80.3962C25.3029 80.4539 25.2247 80.4863 25.1431 80.4863V80.4863Z" fill="#828282" />
                        <path d="M52.5224 80.4863H34.373C34.3325 80.4865 34.2924 80.4786 34.255 80.4632C34.2176 80.4478 34.1836 80.4251 34.1549 80.3966C34.1262 80.368 34.1035 80.334 34.088 80.2967C34.0724 80.2593 34.0645 80.2192 34.0645 80.1787C34.0645 80.1382 34.0724 80.0982 34.088 80.0608C34.1035 80.0234 34.1262 79.9894 34.1549 79.9609C34.1836 79.9323 34.2176 79.9096 34.255 79.8942C34.2924 79.8788 34.3325 79.871 34.373 79.8711H52.5224C52.604 79.8711 52.6823 79.9035 52.7399 79.9612C52.7976 80.0189 52.83 80.0971 52.83 80.1787C52.83 80.2603 52.7976 80.3385 52.7399 80.3962C52.6823 80.4539 52.604 80.4863 52.5224 80.4863V80.4863Z" fill="#828282" />
                        <path d="M79.9014 80.4863H61.752C61.6706 80.4861 61.5926 80.4536 61.5351 80.3959C61.4776 80.3382 61.4453 80.2601 61.4453 80.1787C61.4453 80.0973 61.4776 80.0192 61.5351 79.9615C61.5926 79.9039 61.6706 79.8713 61.752 79.8711H79.9014C79.983 79.8711 80.0612 79.9035 80.1189 79.9612C80.1766 80.0189 80.209 80.0971 80.209 80.1787C80.209 80.2603 80.1766 80.3385 80.1189 80.3962C80.0612 80.4539 79.983 80.4863 79.9014 80.4863V80.4863Z" fill="#828282" />
                        <path d="M107.281 80.4863H89.1314C89.05 80.4861 88.972 80.4536 88.9145 80.3959C88.857 80.3382 88.8247 80.2601 88.8247 80.1787C88.8247 80.0973 88.857 80.0192 88.9145 79.9615C88.972 79.9039 89.05 79.8713 89.1314 79.8711H107.281C107.362 79.8711 107.441 79.9035 107.498 79.9612C107.556 80.0189 107.588 80.0971 107.588 80.1787C107.588 80.2603 107.556 80.3385 107.498 80.3962C107.441 80.4539 107.362 80.4863 107.281 80.4863V80.4863Z" fill="#828282" />
                        <path d="M100.183 57.791C106.411 52.1577 108.624 44.4589 105.125 40.5953C101.627 36.7318 93.7416 38.1665 87.5136 43.7999C81.2856 49.4333 79.0729 57.132 82.5714 60.9956C86.07 64.8591 93.9549 63.4244 100.183 57.791Z" fill="#E6E6E6" />
                        <path d="M82.0623 73.2129C81.2225 71.4788 80.9251 69.525 81.0713 67.612C81.2299 65.7111 81.791 63.8656 82.7173 62.1978C83.6019 60.5813 84.7711 59.1343 86.1001 57.8618C87.5106 56.5114 89.1011 55.3649 90.7745 54.3629C92.5416 53.3049 94.3984 52.4058 96.2769 51.5645C96.511 51.4596 96.7454 51.3556 96.9802 51.2524C97.1343 51.1846 97.001 50.9587 96.8479 51.0261C94.9327 51.8689 93.0337 52.7571 91.2177 53.7993C89.4828 54.795 87.823 55.934 86.3401 57.2799C84.9567 58.5355 83.7239 59.9719 82.768 61.5801C81.774 63.2289 81.1295 65.0642 80.8743 66.9723C80.6294 68.8938 80.8187 70.8921 81.5476 72.6951C81.6365 72.9149 81.7326 73.1316 81.8359 73.3452C81.9094 73.497 82.1356 73.3642 82.0623 73.2129V73.2129Z" fill="#CCCCCC" />
                        <path d="M89.296 55.0315C89.2093 53.6025 89.3169 52.1683 89.6158 50.7682C89.9138 49.3673 90.3975 48.0124 91.0542 46.7394C91.4238 46.0248 91.8474 45.3394 92.3213 44.6891C92.4207 44.5526 92.1933 44.4217 92.0949 44.5568C91.2434 45.729 90.5542 47.0107 90.046 48.3672C89.5366 49.7239 89.2098 51.1422 89.0741 52.5849C88.9975 53.3982 88.984 54.2161 89.0338 55.0315C89.044 55.1991 89.3063 55.2002 89.296 55.0315V55.0315Z" fill="#CCCCCC" />
                        <path d="M15.4465 68.1581C13.4733 66.3733 12.7722 63.9342 13.8806 62.7101C14.9891 61.486 17.4872 61.9406 19.4604 63.7254C21.4336 65.5102 22.1346 67.9493 21.0262 69.1734C19.9178 70.3975 17.4197 69.9429 15.4465 68.1581Z" fill="#E6E6E6" />
                        <path d="M21.1862 73.0431C21.4523 72.4937 21.5465 71.8746 21.5002 71.2685C21.4499 70.6663 21.2722 70.0816 20.9787 69.5532C20.6984 69.041 20.328 68.5826 19.907 68.1794C19.4601 67.7516 18.9562 67.3884 18.426 67.0709C17.8661 66.7357 17.2778 66.4508 16.6827 66.1843C16.6085 66.1511 16.5342 66.1181 16.4598 66.0854C16.411 66.0639 16.4532 65.9923 16.5018 66.0137C17.1085 66.2807 17.7102 66.5621 18.2856 66.8923C18.8352 67.2078 19.3611 67.5686 19.8309 67.9951C20.2692 68.3929 20.6598 68.848 20.9627 69.3575C21.2776 69.8799 21.4818 70.4613 21.5626 71.0659C21.6402 71.6747 21.5802 72.3078 21.3493 72.879C21.3211 72.9487 21.2907 73.0173 21.258 73.085C21.2347 73.1331 21.163 73.091 21.1862 73.0431V73.0431Z" fill="#CCCCCC" />
                        <path d="M18.8949 67.2839C18.9224 66.8312 18.8883 66.3768 18.7936 65.9332C18.6992 65.4893 18.5459 65.0601 18.3379 64.6568C18.2208 64.4304 18.0866 64.2132 17.9364 64.0072C17.9049 63.9639 17.977 63.9225 18.0082 63.9653C18.2779 64.3366 18.4963 64.7427 18.6573 65.1725C18.8187 65.6023 18.9222 66.0517 18.9652 66.5088C18.9895 66.7664 18.9938 67.0256 18.978 67.2839C18.9748 67.337 18.8917 67.3374 18.8949 67.2839V67.2839Z" fill="#CCCCCC" />
                        <path d="M20.3164 63.1961C16.391 59.6455 14.9963 54.793 17.2014 52.3579C19.4064 49.9228 24.3762 50.8271 28.3016 54.3777C32.227 57.9283 33.6216 62.7807 31.4166 65.2158C29.2115 67.651 24.2418 66.7467 20.3164 63.1961Z" fill="#E6E6E6" />
                        <path d="M31.7376 72.9137C32.267 71.8207 32.4544 70.5893 32.3623 69.3835C32.2623 68.1854 31.9086 67.0222 31.3248 65.9711C30.7672 64.9522 30.0303 64.0401 29.1927 63.2382C28.3037 62.387 27.3012 61.6644 26.2465 61.0329C25.1327 60.366 23.9624 59.7993 22.7784 59.269C22.6309 59.203 22.4831 59.1374 22.3351 59.0723C22.238 59.0296 22.322 58.8872 22.4185 58.9297C23.6256 59.4609 24.8226 60.0208 25.9672 60.6776C27.0606 61.3052 28.1068 62.0231 29.0414 62.8714C29.9133 63.6628 30.6904 64.5681 31.2929 65.5817C31.9193 66.6209 32.3256 67.7777 32.4864 68.9803C32.6408 70.1915 32.5214 71.4509 32.0621 72.5873C32.006 72.7259 31.9455 72.8625 31.8803 72.9971C31.834 73.0927 31.6914 73.0091 31.7376 72.9137V72.9137Z" fill="#CCCCCC" />
                        <path d="M27.1785 61.4562C27.2331 60.5555 27.1653 59.6516 26.9769 58.7691C26.7891 57.8861 26.4842 57.0322 26.0704 56.2298C25.8374 55.7794 25.5704 55.3474 25.2717 54.9376C25.209 54.8515 25.3524 54.769 25.4144 54.8542C25.9511 55.593 26.3855 56.4008 26.7058 57.2558C27.0269 58.1109 27.2329 59.0048 27.3184 59.9141C27.3667 60.4267 27.3752 60.9423 27.3438 61.4562C27.3374 61.5618 27.172 61.5625 27.1785 61.4562V61.4562Z" fill="#CCCCCC" />
                        <path d="M39.2062 65.6837C42.2866 62.8973 43.3809 59.0894 41.6506 57.1785C39.9203 55.2675 36.0205 55.9772 32.9402 58.7635C29.8599 61.5498 28.7655 65.3577 30.4958 67.2687C32.2261 69.1796 36.1259 68.47 39.2062 65.6837Z" fill="#E6E6E6" />
                        <path d="M30.2442 73.3118C29.8288 72.4541 29.6817 71.4877 29.754 70.5416C29.8325 69.6014 30.11 68.6886 30.5681 67.8637C31.0057 67.0642 31.5839 66.3485 32.2412 65.7191C32.9389 65.0512 33.7255 64.4842 34.5532 63.9886C35.4272 63.4653 36.3456 63.0206 37.2747 62.6045C37.3905 62.5526 37.5064 62.5012 37.6226 62.4501C37.6988 62.4166 37.6329 62.3048 37.5571 62.3382C36.6099 62.755 35.6706 63.1943 34.7724 63.7098C33.9143 64.2023 33.0934 64.7656 32.3599 65.4313C31.6757 66.0523 31.066 66.7627 30.5932 67.5582C30.1016 68.3737 29.7828 69.2814 29.6566 70.2251C29.5354 71.1756 29.6291 72.1639 29.9896 73.0556C30.0335 73.1644 30.0811 73.2716 30.1322 73.3772C30.1685 73.4523 30.2804 73.3866 30.2442 73.3118V73.3118Z" fill="#CCCCCC" />
                        <path d="M33.8215 64.3202C33.7786 63.6134 33.8318 62.9041 33.9797 62.2116C34.1271 61.5187 34.3663 60.8486 34.6911 60.2189C34.8739 59.8655 35.0834 59.5265 35.3178 59.2049C35.367 59.1373 35.2545 59.0726 35.2058 59.1394C34.7847 59.7192 34.4438 60.3531 34.1924 61.0241C33.9405 61.6951 33.7788 62.3965 33.7117 63.1101C33.6738 63.5123 33.6672 63.9169 33.6918 64.3202C33.6968 64.4031 33.8266 64.4036 33.8215 64.3202V64.3202Z" fill="#CCCCCC" />
                        <path d="M57.5995 21.4551C55.9361 21.4538 54.2952 21.8385 52.8058 22.5786C51.3164 23.3188 50.0192 24.3944 49.0163 25.7207C47.9398 25.2577 46.7652 25.0691 45.5978 25.1719C44.4304 25.2747 43.3069 25.6656 42.328 26.3095C41.349 26.9534 40.5455 27.8302 39.9893 28.8612C39.4332 29.8921 39.1419 31.045 39.1416 32.2162H68.3665C68.3665 30.8031 68.088 29.4037 67.547 28.0981C67.0059 26.7925 66.2127 25.6062 65.2129 24.6069C64.2131 23.6077 63.0262 22.815 61.7198 22.2742C60.4135 21.7334 59.0134 21.4551 57.5995 21.4551V21.4551Z" fill="#CCCCCC" />
                        <path d="M23.7362 10.2324C22.0728 10.2312 20.4319 10.6158 18.9425 11.356C17.4531 12.0962 16.1559 13.1717 15.153 14.498C14.0766 14.035 12.9019 13.8465 11.7345 13.9492C10.5671 14.052 9.44358 14.4429 8.46467 15.0868C7.48576 15.7307 6.68217 16.6075 6.12603 17.6385C5.56988 18.6695 5.2786 19.8223 5.27832 20.9936H34.5033C34.5033 19.5804 34.2248 18.1811 33.6837 16.8755C33.1426 15.5699 32.3495 14.3836 31.3497 13.3843C30.3498 12.385 29.1629 11.5924 27.8566 11.0516C26.5502 10.5108 25.1501 10.2324 23.7362 10.2324V10.2324Z" fill="#CCCCCC" />
                    </svg>
                </div>
                <p>Drag & Drop your image here</p>
                </div>
                    <div className='or'>Or</div>
                    <input type='file' onChange={(event)=>{upLoadImage(event.target.files)}} hidden accept="image/*" ref={inputRef}/>
                    <div className='buttonDiv'><button onClick={() => {
                         if (inputRef.current) {
                            inputRef.current.click()
                        }
                    }}className = 'button' > Choose file</button></div>
                </div>
           
        </>
       
    )
}
export default ImageUploader;
