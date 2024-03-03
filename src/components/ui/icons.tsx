import React from "react";

export const Icons = {
  ex: (props: React.SVGAttributes<SVGSVGElement>) => (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" {...props}>
      <line
        y1="-0.5"
        x2="13.4341"
        y2="-0.5"
        transform="matrix(0.714669 -0.699463 0.714669 0.699463 5.16992 14.4565)"
        stroke="#ECEAED"
      />
      <line
        y1="-0.5"
        x2="13.4341"
        y2="-0.5"
        transform="matrix(-0.714669 -0.699463 0.714669 -0.699463 14.7705 13.7339)"
        stroke="#ECEAED"
      />
    </svg>
  ),
  kondish: (props: React.SVGAttributes<SVGElement>) => (
    <svg width="338" height="85" viewBox="0 0 338 85" fill="none" {...props}>
      <path
        d="M0.896484 17.1544H19.6405V32.0644L30.2905 17.1544H50.5965L34.6215 38.2414L51.3065 66.8544H30.2905L21.9835 51.1634L19.6405 54.0034V66.8544H0.896484V17.1544Z"
        fill="white"
      />
      <path
        d="M73.6604 67.9194C70.1577 67.9194 66.8444 67.4224 63.7204 66.4284C60.6437 65.4344 57.9457 63.9198 55.6264 61.8844C53.3071 59.8018 51.4611 57.1511 50.0884 53.9324C48.7631 50.7138 48.1004 46.8561 48.1004 42.3594V40.9394C48.1004 36.6794 48.7631 33.0111 50.0884 29.9344C51.4611 26.8104 53.3071 24.2308 55.6264 22.1954C57.9457 20.1128 60.6437 18.5744 63.7204 17.5804C66.8444 16.5864 70.1577 16.0894 73.6604 16.0894C77.1631 16.0894 80.4527 16.5864 83.5294 17.5804C86.6534 18.5744 89.3751 20.1128 91.6944 22.1954C94.0137 24.2308 95.8361 26.8104 97.1614 29.9344C98.5341 33.0111 99.2204 36.6794 99.2204 40.9394V42.3594C99.2204 46.7614 98.5341 50.5718 97.1614 53.7904C95.8361 57.0091 94.0137 59.6834 91.6944 61.8134C89.3751 63.8961 86.6534 65.4344 83.5294 66.4284C80.4527 67.4224 77.1631 67.9194 73.6604 67.9194ZM73.6604 52.7254C75.6484 52.7254 77.2104 51.9444 78.3464 50.3824C79.4824 48.7731 80.0504 46.0988 80.0504 42.3594V40.9394C80.0504 37.5314 79.4824 35.0701 78.3464 33.5554C77.2104 32.0408 75.6484 31.2834 73.6604 31.2834C71.6724 31.2834 70.1104 32.0408 68.9744 33.5554C67.8384 35.0701 67.2704 37.5314 67.2704 40.9394V42.3594C67.2704 46.0988 67.8384 48.7731 68.9744 50.3824C70.1104 51.9444 71.6724 52.7254 73.6604 52.7254Z"
        fill="white"
      />
      <path
        d="M101.334 17.1544H116.528L132.29 37.7444V17.1544H149.614V66.8544H134.42L118.658 46.2644V66.8544H101.334V17.1544Z"
        fill="white"
      />
      <path
        d="M153.147 17.1544H175.512C179.251 17.1544 182.612 17.6751 185.594 18.7164C188.623 19.7104 191.203 21.2014 193.333 23.1894C195.463 25.1774 197.096 27.6624 198.232 30.6444C199.415 33.6264 200.007 37.0581 200.007 40.9394V42.3594C200.007 46.3354 199.415 49.8618 198.232 52.9384C197.049 55.9678 195.345 58.5238 193.12 60.6064C190.943 62.6418 188.292 64.2038 185.168 65.2924C182.091 66.3338 178.636 66.8544 174.802 66.8544H153.147V17.1544ZM174.802 51.8024C175.701 51.8024 176.506 51.6604 177.216 51.3764C177.973 51.0924 178.612 50.5954 179.133 49.8854C179.701 49.1754 180.127 48.2051 180.411 46.9744C180.695 45.7438 180.837 44.2054 180.837 42.3594V40.9394C180.837 37.5788 180.34 35.2831 179.346 34.0524C178.352 32.8218 176.837 32.2064 174.802 32.2064H171.891V51.8024H174.802Z"
        fill="white"
      />
      <path
        d="M202.473 17.1544H221.217V66.8544H202.473V17.1544Z"
        fill="white"
      />
      <path
        d="M246.032 67.9194C238.932 67.9194 233.489 66.6651 229.702 64.1564C225.916 61.6004 223.667 57.5298 222.957 51.9444H241.701C241.843 52.9384 242.222 53.6721 242.837 54.1454C243.453 54.6188 244.518 54.8554 246.032 54.8554C247.689 54.8554 248.825 54.6898 249.44 54.3584C250.056 53.9798 250.363 53.4118 250.363 52.6544C250.363 52.2284 250.245 51.8734 250.008 51.5894C249.772 51.3054 249.298 51.0214 248.588 50.7374C247.926 50.4534 246.955 50.1694 245.677 49.8854C244.447 49.5541 242.79 49.1754 240.707 48.7494C238.341 48.2761 236.163 47.6608 234.175 46.9034C232.187 46.0988 230.46 45.0574 228.992 43.7794C227.525 42.5014 226.389 40.9394 225.584 39.0934C224.78 37.2001 224.377 34.9754 224.377 32.4194C224.377 29.6741 224.898 27.2838 225.939 25.2484C226.981 23.1658 228.448 21.4618 230.341 20.1364C232.282 18.7638 234.578 17.7461 237.228 17.0834C239.879 16.4208 242.814 16.0894 246.032 16.0894C252.801 16.0894 257.984 17.4621 261.581 20.2074C265.179 22.9528 267.332 26.6684 268.042 31.3544H249.298C249.204 30.6918 248.896 30.1711 248.375 29.7924C247.902 29.3664 247.121 29.1534 246.032 29.1534C244.092 29.1534 243.121 29.8871 243.121 31.3544C243.121 31.7804 243.24 32.1591 243.476 32.4904C243.76 32.8218 244.21 33.1294 244.825 33.4134C245.441 33.6501 246.269 33.8868 247.31 34.1234C248.399 34.3601 249.748 34.6204 251.357 34.9044C253.44 35.2831 255.523 35.8038 257.605 36.4664C259.735 37.0818 261.652 37.9811 263.356 39.1644C265.06 40.3478 266.433 41.8861 267.474 43.7794C268.563 45.6254 269.107 47.9684 269.107 50.8084C269.107 53.7431 268.563 56.2991 267.474 58.4764C266.386 60.6064 264.824 62.3814 262.788 63.8014C260.8 65.1741 258.386 66.1918 255.546 66.8544C252.706 67.5644 249.535 67.9194 246.032 67.9194Z"
        fill="white"
      />
      <path
        d="M270.522 17.1544H289.266V34.1234H300.058V17.1544H318.802V66.8544H300.058V49.1754H289.266V66.8544H270.522V17.1544Z"
        fill="white"
      />
      <path
        d="M77.3965 14.8544H70.8965L76.3965 6.85445H90.3965L77.3965 14.8544Z"
        fill="white"
      />
      <path
        d="M326.58 12.3728L326.553 5.45613L330.059 5.44282C330.34 5.44175 330.646 5.52182 330.978 5.68301C331.31 5.83795 331.592 6.08056 331.824 6.41084C332.063 6.73484 332.183 7.14676 332.185 7.64661C332.187 8.15271 332.067 8.58429 331.824 8.94136C331.582 9.29218 331.286 9.55885 330.937 9.74137C330.594 9.92387 330.27 10.0157 329.963 10.0169L327.433 10.0265L327.429 8.90181L329.491 8.89398C329.697 8.8932 329.918 8.78927 330.155 8.58218C330.398 8.37506 330.518 8.06532 330.517 7.65294C330.515 7.22807 330.392 6.94112 330.148 6.79209C329.91 6.64304 329.7 6.56886 329.519 6.56954L328.076 6.57502L328.098 12.367L326.58 12.3728ZM330.747 9.0954L332.484 12.3504L330.816 12.3567L329.116 9.1016L330.747 9.0954ZM329.219 16.4866C328.182 16.4905 327.21 16.3005 326.303 15.9166C325.395 15.5326 324.596 14.9983 323.907 14.3136C323.217 13.629 322.676 12.8344 322.285 11.9299C321.895 11.0253 321.697 10.0545 321.693 9.01731C321.689 7.98013 321.879 7.00781 322.263 6.10036C322.647 5.19291 323.182 4.39424 323.866 3.70434C324.551 3.01444 325.346 2.47407 326.25 2.08325C327.155 1.69243 328.125 1.49505 329.163 1.49111C330.2 1.48717 331.172 1.67717 332.079 2.06112C332.987 2.44506 333.786 2.97937 334.476 3.66406C335.165 4.34874 335.706 5.14334 336.097 6.04784C336.487 6.95235 336.685 7.92319 336.689 8.96038C336.693 9.99757 336.503 10.9699 336.119 11.8773C335.735 12.7848 335.2 13.5835 334.516 14.2734C333.831 14.9633 333.037 15.5036 332.132 15.8944C331.228 16.2853 330.257 16.4826 329.219 16.4866ZM329.213 14.6871C330.262 14.6831 331.217 14.4233 332.078 13.9077C332.938 13.3921 333.623 12.7022 334.132 11.838C334.641 10.9738 334.893 10.0169 334.889 8.96721C334.885 7.91753 334.626 6.96254 334.11 6.10224C333.594 5.24195 332.904 4.55727 332.04 4.0482C331.176 3.53912 330.219 3.28658 329.169 3.29057C328.12 3.29455 327.165 3.55435 326.304 4.06997C325.444 4.58559 324.759 5.27549 324.25 6.13968C323.741 7.00386 323.489 7.9608 323.493 9.01048C323.497 10.0602 323.757 11.0152 324.272 11.8754C324.788 12.7357 325.478 13.4204 326.342 13.9295C327.206 14.4386 328.163 14.6911 329.213 14.6871Z"
        fill="white"
      />
      <path
        d="M1.05713 72.7116H5.66427C6.41427 72.7116 7.09284 72.8068 7.69999 72.9973C8.30713 73.1759 8.82499 73.4497 9.25356 73.8187C9.68213 74.1878 10.0095 74.6402 10.2357 75.1759C10.4738 75.6997 10.5928 76.3009 10.5928 76.9794C10.5928 77.658 10.4738 78.2652 10.2357 78.8009C10.0095 79.3247 9.68213 79.7711 9.25356 80.1402C8.82499 80.5092 8.30713 80.7949 7.69999 80.9973C7.09284 81.1878 6.41427 81.283 5.66427 81.283H3.02141V84.8544H1.05713V72.7116ZM5.75356 79.4973C6.6107 79.5092 7.30118 79.3009 7.82499 78.8723C8.3607 78.4318 8.62856 77.8009 8.62856 76.9794C8.62856 76.158 8.3607 75.539 7.82499 75.1223C7.30118 74.7056 6.6107 74.4973 5.75356 74.4973H3.02141V79.4973H5.75356Z"
        fill="white"
      />
      <path
        d="M15.6924 84.8544L20.871 72.7116H22.9603L28.1567 84.8544H25.9603L24.871 82.1402H18.9781L17.8888 84.8544H15.6924ZM24.1924 80.3544L21.9245 74.658L19.6567 80.3544H24.1924Z"
        fill="white"
      />
      <path
        d="M35.6642 84.8544V72.7116H43.2713V74.4973H37.6284V77.4973H40.1284C40.7713 77.4973 41.3368 77.5925 41.8249 77.783C42.3249 77.9616 42.7415 78.2116 43.0749 78.533C43.4201 78.8544 43.6761 79.2413 43.8427 79.6937C44.0213 80.1342 44.1106 80.6223 44.1106 81.158C44.1106 81.6937 44.0213 82.1878 43.8427 82.6402C43.6761 83.0925 43.4201 83.4854 43.0749 83.8187C42.7415 84.1402 42.3249 84.3961 41.8249 84.5866C41.3249 84.7652 40.7534 84.8544 40.1106 84.8544H35.6642ZM39.8427 83.158C40.6284 83.158 41.2118 82.9675 41.5927 82.5866C41.9737 82.2056 42.1642 81.7294 42.1642 81.158C42.1642 80.5985 41.9737 80.1342 41.5927 79.7652C41.2118 79.3842 40.6284 79.1937 39.8427 79.1937H37.6284V83.158H39.8427Z"
        fill="white"
      />
      <path
        d="M51.3971 78.783C51.3971 77.8544 51.5459 77.0092 51.8435 76.2473C52.1411 75.4854 52.5638 74.8306 53.1114 74.283C53.6709 73.7354 54.3376 73.3128 55.1114 73.0152C55.8852 72.7175 56.7483 72.5687 57.7007 72.5687C58.653 72.5687 59.5161 72.7175 60.2899 73.0152C61.0637 73.3128 61.7245 73.7354 62.2721 74.283C62.8316 74.8306 63.2602 75.4854 63.5578 76.2473C63.8554 77.0092 64.0042 77.8544 64.0042 78.783C64.0042 79.7116 63.8554 80.5568 63.5578 81.3187C63.2602 82.0806 62.8316 82.7354 62.2721 83.283C61.7245 83.8306 61.0637 84.2532 60.2899 84.5509C59.5161 84.8485 58.653 84.9973 57.7007 84.9973C56.7483 84.9973 55.8852 84.8485 55.1114 84.5509C54.3376 84.2532 53.6709 83.8306 53.1114 83.283C52.5638 82.7354 52.1411 82.0806 51.8435 81.3187C51.5459 80.5568 51.3971 79.7116 51.3971 78.783ZM53.3792 78.783C53.3792 79.4616 53.4745 80.0747 53.6649 80.6223C53.8673 81.158 54.153 81.6223 54.5221 82.0152C54.903 82.3961 55.3554 82.6878 55.8792 82.8902C56.4149 83.0925 57.0221 83.1937 57.7007 83.1937C58.3792 83.1937 58.9864 83.0925 59.5221 82.8902C60.0578 82.6878 60.5102 82.3961 60.8792 82.0152C61.2602 81.6223 61.5459 81.158 61.7364 80.6223C61.9388 80.0747 62.0399 79.4616 62.0399 78.783C62.0399 78.1044 61.9388 77.4973 61.7364 76.9616C61.5459 76.414 61.2602 75.9497 60.8792 75.5687C60.5102 75.1759 60.0578 74.8782 59.5221 74.6759C58.9864 74.4735 58.3792 74.3723 57.7007 74.3723C57.0221 74.3723 56.4149 74.4735 55.8792 74.6759C55.3554 74.8782 54.903 75.1759 54.5221 75.5687C54.153 75.9497 53.8673 76.414 53.6649 76.9616C53.4745 77.4973 53.3792 78.1044 53.3792 78.783Z"
        fill="white"
      />
      <path
        d="M73.7388 74.4973H69.9531V72.7116H79.596V74.4973H75.7031V84.8544H73.7388V74.4973Z"
        fill="white"
      />
      <path
        d="M84.9846 84.8544L90.1632 72.7116H92.2524L97.4489 84.8544H95.2524L94.1632 82.1402H88.2703L87.181 84.8544H84.9846ZM93.4846 80.3544L91.2167 74.658L88.9489 80.3544H93.4846Z"
        fill="white"
      />
      <path
        d="M104.956 72.7116H114.063V74.4973H106.921V77.8902H114.063V79.6937H106.921V83.0687H114.063V84.8544H104.956V72.7116Z"
        fill="white"
      />
      <path
        d="M129.573 82.4437L133.68 72.7116H135.787L137.323 84.8544L135.269 84.8723L134.269 76.0866L130.573 84.8544H128.573L124.876 76.1044L123.876 84.8723L121.823 84.8544L123.358 72.7116H125.465L129.573 82.4437Z"
        fill="white"
      />
      <path
        d="M162.758 72.7116H164.722V84.8544H162.758V80.3902C162.377 80.7116 161.924 80.9675 161.401 81.158C160.877 81.3366 160.299 81.4259 159.669 81.4259C158.419 81.4259 157.49 81.1163 156.883 80.4973C156.276 79.8782 155.972 78.9973 155.972 77.8544V72.7116H157.954V77.7473C157.954 78.4616 158.139 78.9973 158.508 79.3544C158.877 79.6997 159.401 79.8723 160.079 79.8723C160.472 79.8723 160.829 79.8187 161.151 79.7116C161.484 79.5925 161.77 79.4318 162.008 79.2294C162.246 79.0271 162.43 78.789 162.561 78.5152C162.692 78.2413 162.758 77.9437 162.758 77.6223V72.7116Z"
        fill="white"
      />
      <path
        d="M173.252 72.7116H182.36V74.4973H175.217V77.8902H182.36V79.6937H175.217V83.0687H182.36V84.8544H173.252V72.7116Z"
        fill="white"
      />
      <path
        d="M200.186 84.2473C199.96 84.3544 199.698 84.4556 199.4 84.5509C199.114 84.6461 198.805 84.7294 198.471 84.8009C198.138 84.8604 197.793 84.908 197.436 84.9437C197.09 84.9794 196.745 84.9973 196.4 84.9973C195.412 84.9973 194.513 84.8544 193.704 84.5687C192.906 84.2711 192.221 83.8544 191.65 83.3187C191.079 82.7711 190.638 82.1163 190.329 81.3544C190.019 80.5806 189.864 79.7235 189.864 78.783C189.864 77.8306 190.019 76.9735 190.329 76.2116C190.65 75.4497 191.096 74.8009 191.668 74.2652C192.239 73.7175 192.93 73.3009 193.739 73.0152C194.549 72.7175 195.454 72.5687 196.454 72.5687C197.144 72.5687 197.817 72.6402 198.471 72.783C199.138 72.914 199.71 73.0925 200.186 73.3187V75.1759C199.721 74.9378 199.174 74.7592 198.543 74.6402C197.924 74.5092 197.293 74.4437 196.65 74.4437C195.9 74.4437 195.227 74.5449 194.632 74.7473C194.037 74.9378 193.531 75.2235 193.114 75.6044C192.698 75.9735 192.376 76.4259 192.15 76.9616C191.936 77.4854 191.829 78.0866 191.829 78.7652C191.829 80.1223 192.245 81.1878 193.079 81.9616C193.924 82.7235 195.126 83.1044 196.686 83.1044C197.364 83.1044 198.007 83.0449 198.614 82.9259C199.221 82.7949 199.745 82.6104 200.186 82.3723V84.2473Z"
        fill="white"
      />
      <path
        d="M211.659 74.4973H207.873V72.7116H217.516V74.4973H213.623V84.8544H211.659V74.4973Z"
        fill="white"
      />
      <path
        d="M225.29 72.7116H227.254V77.8902H234.04V72.7116H236.004V84.8544H234.04V79.6937H227.254V84.8544H225.29V72.7116Z"
        fill="white"
      />
      <path
        d="M243.64 78.783C243.64 77.8544 243.789 77.0092 244.086 76.2473C244.384 75.4854 244.807 74.8306 245.354 74.283C245.914 73.7354 246.581 73.3128 247.354 73.0152C248.128 72.7175 248.991 72.5687 249.944 72.5687C250.896 72.5687 251.759 72.7175 252.533 73.0152C253.307 73.3128 253.967 73.7354 254.515 74.283C255.075 74.8306 255.503 75.4854 255.801 76.2473C256.098 77.0092 256.247 77.8544 256.247 78.783C256.247 79.7116 256.098 80.5568 255.801 81.3187C255.503 82.0806 255.075 82.7354 254.515 83.283C253.967 83.8306 253.307 84.2532 252.533 84.5509C251.759 84.8485 250.896 84.9973 249.944 84.9973C248.991 84.9973 248.128 84.8485 247.354 84.5509C246.581 84.2532 245.914 83.8306 245.354 83.283C244.807 82.7354 244.384 82.0806 244.086 81.3187C243.789 80.5568 243.64 79.7116 243.64 78.783ZM245.622 78.783C245.622 79.4616 245.717 80.0747 245.908 80.6223C246.11 81.158 246.396 81.6223 246.765 82.0152C247.146 82.3961 247.598 82.6878 248.122 82.8902C248.658 83.0925 249.265 83.1937 249.944 83.1937C250.622 83.1937 251.229 83.0925 251.765 82.8902C252.301 82.6878 252.753 82.3961 253.122 82.0152C253.503 81.6223 253.789 81.158 253.979 80.6223C254.182 80.0747 254.283 79.4616 254.283 78.783C254.283 78.1044 254.182 77.4973 253.979 76.9616C253.789 76.414 253.503 75.9497 253.122 75.5687C252.753 75.1759 252.301 74.8782 251.765 74.6759C251.229 74.4735 250.622 74.3723 249.944 74.3723C249.265 74.3723 248.658 74.4735 248.122 74.6759C247.598 74.8782 247.146 75.1759 246.765 75.5687C246.396 75.9497 246.11 76.414 245.908 76.9616C245.717 77.4973 245.622 78.1044 245.622 78.783Z"
        fill="white"
      />
    </svg>
  ),
};
