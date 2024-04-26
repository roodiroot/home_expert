import { cn } from "@/lib/utils";
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
  phone: (props: React.SVGAttributes<SVGElement>) => (
    <svg viewBox="0 0 13 13" fill="none" {...props}>
      <path
        d="M4.97362 1.76843C4.78802 1.30442 4.33861 1.00015 3.83885 1.00015H2.15787C1.51839 1.00015 1 1.51842 1 2.15789C1 7.5934 5.40647 11.9999 10.842 11.9999C11.4814 11.9999 11.9997 11.4814 11.9997 10.842L12 9.1607C12 8.66094 11.6958 8.2116 11.2318 8.02599L9.62068 7.38178C9.20387 7.21506 8.72931 7.2901 8.38444 7.57748L7.96864 7.92428C7.48303 8.32895 6.76852 8.29677 6.32154 7.84979L5.1507 6.67787C4.70372 6.2309 4.67069 5.51696 5.07536 5.03136L5.42209 4.61558C5.70948 4.27071 5.78518 3.79601 5.61845 3.3792L4.97362 1.76843Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  shortLogo: (props: React.SVGAttributes<SVGElement>) => (
    <svg viewBox="0 0 46 57" fill="none" {...props}>
      <path
        d="M41.5723 13.5748L25.0337 3.39718C24.0897 2.81628 22.9024 2.80318 21.9459 3.36311L4.48446 13.5844C3.56503 14.1226 3 15.1081 3 16.1735V50.4534L17 37.4534H40C41.6569 37.4534 43 36.1102 43 34.4534V16.1298C43 15.088 42.4595 14.1208 41.5723 13.5748Z"
        stroke="#4F46E5"
        strokeWidth="5"
      />
    </svg>
  ),
  burger: ({ open }: { open: boolean }) => (
    <div className="relative w-5 h-5">
      <span
        className={cn(
          "absolute transition-all duration-75 top-1/2 left-0  h-[2px] bg-gray-600 after:transition-all after:duration-300 after:absolute after:top-2 after:left-0 after:w-5 after:h-[2px] after:bg-gray-600 before:absolute before:transition-all before:duration-300 before:-top-2 before:left-0 before:w-5 before:h-[2px] before:bg-gray-600",
          open
            ? "w-0 after:rotate-45 after:-translate-y-2 before:-rotate-45 before:translate-y-2"
            : "w-5 after:rotate-0 after:translate-y-0 before:-rotate-0 before:translate-y-0"
        )}
      ></span>
    </div>
  ),
  arrowRight: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={11}
      fill="none"
      {...props}
    >
      <g
        stroke="#4F46E5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="m10.582 1.31 3.648 4-3.649 4M1 5.31h13.23" />
      </g>
    </svg>
  ),
  symbolOk: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  symbolOk2: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      ></path>
    </svg>
  ),
  left: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      width="13"
      height="21"
      viewBox="0 0 13 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector 14"
        d="M1.22412 1.0415L10.702 9.8691L1.22412 19.0415"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  right: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      width="13"
      height="21"
      viewBox="0 0 13 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="Vector 15"
        d="M11.2727 1.0415L1.79271 9.8691L11.2727 19.0415"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  rating: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      width="83"
      height="19"
      viewBox="0 0 83 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="rating">
        <path
          id="Star 3"
          d="M8.71205 2.98373C8.95154 2.24668 9.99426 2.24668 10.2337 2.98373L11.3139 6.30815C11.421 6.63777 11.7282 6.86094 12.0748 6.86094H15.5703C16.3452 6.86094 16.6675 7.85263 16.0405 8.30815L13.2126 10.3628C12.9322 10.5665 12.8149 10.9276 12.922 11.2572L14.0021 14.5816C14.2416 15.3186 13.398 15.9316 12.771 15.476L9.94313 13.4214C9.66274 13.2177 9.28306 13.2177 9.00267 13.4214L6.17475 15.476C5.54778 15.9315 4.7042 15.3187 4.94368 14.5816L6.02385 11.2572C6.13095 10.9276 6.01362 10.5665 5.73323 10.3628L2.90531 8.30815C2.27834 7.85263 2.60056 6.86094 3.37554 6.86094H6.87104C7.21762 6.86094 7.52479 6.63777 7.63189 6.30815L8.71205 2.98373Z"
          fill="#DDC440"
        />
        <path
          id="Star 5"
          d="M40.7121 2.98373C40.9515 2.24668 41.9943 2.24668 42.2337 2.98373L43.3139 6.30815C43.421 6.63777 43.7282 6.86094 44.0748 6.86094H47.5703C48.3452 6.86094 48.6675 7.85263 48.0405 8.30815L45.2126 10.3628C44.9322 10.5665 44.8149 10.9276 44.922 11.2572L46.0021 14.5816C46.2416 15.3186 45.398 15.9316 44.771 15.476L41.9431 13.4214C41.6627 13.2177 41.2831 13.2177 41.0027 13.4214L38.1748 15.476C37.5478 15.9315 36.7042 15.3187 36.9437 14.5816L38.0238 11.2572C38.1309 10.9276 38.0136 10.5665 37.7332 10.3628L34.9053 8.30815C34.2783 7.85263 34.6006 6.86094 35.3755 6.86094H38.871C39.2176 6.86094 39.5248 6.63777 39.6319 6.30815L40.7121 2.98373Z"
          fill="#DDC440"
        />
        <path
          id="Star 4"
          d="M24.7121 2.98373C24.9515 2.24668 25.9943 2.24668 26.2337 2.98373L27.3139 6.30815C27.421 6.63777 27.7282 6.86094 28.0748 6.86094H31.5703C32.3452 6.86094 32.6675 7.85263 32.0405 8.30815L29.2126 10.3628C28.9322 10.5665 28.8149 10.9276 28.922 11.2572L30.0021 14.5816C30.2416 15.3186 29.398 15.9316 28.771 15.476L25.9431 13.4214C25.6627 13.2177 25.2831 13.2177 25.0027 13.4214L22.1748 15.476C21.5478 15.9315 20.7042 15.3187 20.9437 14.5816L22.0238 11.2572C22.1309 10.9276 22.0136 10.5665 21.7332 10.3628L18.9053 8.30815C18.2783 7.85263 18.6006 6.86094 19.3755 6.86094H22.871C23.2176 6.86094 23.5248 6.63777 23.6319 6.30815L24.7121 2.98373Z"
          fill="#DDC440"
        />
        <path
          id="Star 6"
          d="M56.7121 2.98373C56.9515 2.24668 57.9943 2.24668 58.2337 2.98373L59.3139 6.30815C59.421 6.63777 59.7282 6.86094 60.0748 6.86094H63.5703C64.3452 6.86094 64.6675 7.85263 64.0405 8.30815L61.2126 10.3628C60.9322 10.5665 60.8149 10.9276 60.922 11.2572L62.0021 14.5816C62.2416 15.3186 61.398 15.9316 60.771 15.476L57.9431 13.4214C57.6627 13.2177 57.2831 13.2177 57.0027 13.4214L54.1748 15.476C53.5478 15.9315 52.7042 15.3187 52.9437 14.5816L54.0238 11.2572C54.1309 10.9276 54.0136 10.5665 53.7332 10.3628L50.9053 8.30815C50.2783 7.85263 50.6006 6.86094 51.3755 6.86094H54.871C55.2176 6.86094 55.5248 6.63777 55.6319 6.30815L56.7121 2.98373Z"
          fill="#DDC440"
        />
        <path
          id="Star 7"
          d="M72.7121 2.98373C72.9515 2.24668 73.9943 2.24668 74.2337 2.98373L75.3139 6.30815C75.421 6.63777 75.7282 6.86094 76.0748 6.86094H79.5703C80.3452 6.86094 80.6675 7.85263 80.0405 8.30815L77.2126 10.3628C76.9322 10.5665 76.8149 10.9276 76.922 11.2572L78.0021 14.5816C78.2416 15.3186 77.398 15.9316 76.771 15.476L73.9431 13.4214C73.6627 13.2177 73.2831 13.2177 73.0027 13.4214L70.1748 15.476C69.5478 15.9315 68.7042 15.3187 68.9437 14.5816L70.0238 11.2572C70.1309 10.9276 70.0136 10.5665 69.7332 10.3628L66.9053 8.30815C66.2783 7.85263 66.6006 6.86094 67.3755 6.86094H70.871C71.2176 6.86094 71.5248 6.63777 71.6319 6.30815L72.7121 2.98373Z"
          fill="#DDC440"
        />
      </g>
    </svg>
  ),
  vk: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.37088 0.978271C1.81098 0.978271 1.27401 1.20069 0.878096 1.5966C0.482186 1.99251 0.259766 2.52948 0.259766 3.08938V17.8672C0.259766 18.4271 0.482186 18.964 0.878096 19.3599C1.27401 19.7559 1.81098 19.9783 2.37088 19.9783H17.1487C17.7086 19.9783 18.2455 19.7559 18.6414 19.3599C19.0373 18.964 19.2598 18.4271 19.2598 17.8672V3.08938C19.2598 2.52948 19.0373 1.99251 18.6414 1.5966C18.2455 1.20069 17.7086 0.978271 17.1487 0.978271H2.37088ZM2.89865 6.78383H4.48199C4.86199 6.78383 5.00977 6.95272 5.15754 7.38549C5.91754 9.60216 7.19477 11.5338 7.72254 11.5338C7.9231 11.5338 8.0181 11.4494 8.0181 10.9533V8.66272C7.95477 7.60716 7.39532 7.51216 7.39532 7.14272C7.39532 6.96327 7.5431 6.78383 7.79643 6.78383H10.2348C10.5725 6.78383 10.6781 6.96327 10.6781 7.35383V10.436C10.6781 10.7633 10.8153 10.8794 10.9209 10.8794C11.1214 10.8794 11.2903 10.7633 11.6492 10.4044C12.7681 9.14827 13.5598 7.22716 13.5598 7.22716C13.6653 6.99494 13.8448 6.78383 14.2353 6.78383H15.787C16.262 6.78383 16.3675 7.0266 16.262 7.35383C16.0614 8.2616 14.172 10.9322 14.172 10.9322C13.982 11.196 13.9398 11.3227 14.172 11.6288C14.3303 11.8505 14.8792 12.3149 15.2381 12.7477C15.9137 13.4972 16.4098 14.1305 16.5575 14.5633C16.6842 15.0066 16.4625 15.2283 16.0192 15.2283H14.457C13.8659 15.2283 13.697 14.7533 12.6414 13.6977C11.7125 12.811 11.3431 12.6949 11.0898 12.6949C10.7731 12.6949 10.6781 12.7794 10.6781 13.2333V14.6266C10.6781 15.0066 10.562 15.2283 9.56977 15.2283C7.9231 15.2283 6.10754 14.2255 4.83032 12.3783C2.89865 9.67605 2.37088 7.63883 2.37088 7.22716C2.37088 6.99494 2.45532 6.78383 2.89865 6.78383Z"
        fill="#616689"
      />
    </svg>
  ),
  tg: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="telegram" clipPath="url(#clip0_618_133)">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.8677 10.9783C20.8677 16.5008 16.3902 20.9783 10.8677 20.9783C5.34518 20.9783 0.867676 16.5008 0.867676 10.9783C0.867676 5.45577 5.34518 0.978271 10.8677 0.978271C16.3902 0.978271 20.8677 5.45577 20.8677 10.9783ZM11.226 8.36077C10.2535 8.76494 8.30934 9.60244 5.39434 10.8724C4.92101 11.0608 4.67268 11.2449 4.65018 11.4249C4.61184 11.7299 4.99351 11.8499 5.51184 12.0124C5.58268 12.0349 5.65601 12.0574 5.73101 12.0824C6.24184 12.2483 6.92851 12.4424 7.28518 12.4499C7.60934 12.4566 7.97101 12.3233 8.37018 12.0499C11.0935 10.2108 12.4993 9.2816 12.5877 9.2616C12.6502 9.24744 12.7368 9.2291 12.7952 9.2816C12.8535 9.33327 12.8477 9.4316 12.8418 9.45827C12.8035 9.6191 11.3085 11.0099 10.5335 11.7299C10.2918 11.9541 10.121 12.1133 10.086 12.1499C10.0077 12.2308 9.92768 12.3083 9.85101 12.3824C9.37601 12.8391 9.02101 13.1824 9.87101 13.7424C10.2793 14.0116 10.606 14.2341 10.9318 14.4558C11.2877 14.6983 11.6427 14.9399 12.1027 15.2416C12.2193 15.3183 12.331 15.3974 12.4402 15.4749C12.8543 15.7708 13.2268 16.0358 13.6868 15.9941C13.9535 15.9691 14.2302 15.7183 14.3702 14.9691C14.701 13.1974 15.3527 9.36077 15.5035 7.7791C15.5127 7.64778 15.5071 7.51585 15.4868 7.38577C15.4747 7.28071 15.4236 7.18405 15.3435 7.11494C15.2243 7.01744 15.0393 6.9966 14.956 6.99827C14.5802 7.00494 14.0035 7.20577 11.226 8.36077Z"
          fill="#616689"
        />
      </g>
      <defs>
        <clipPath id="clip0_618_133">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.867676 0.978271)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  mail: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Frame 30">
        <path
          id="Vector"
          d="M0.00309087 4.30332C0.0423121 3.40826 0.425488 2.56288 1.07274 1.94341C1.71999 1.32395 2.58136 0.978209 3.47727 0.978271H18.1591C19.055 0.978209 19.9164 1.32395 20.5636 1.94341C21.2109 2.56288 21.594 3.40826 21.6333 4.30332L20.4927 4.93695L10.8182 10.1459L1.14364 4.93695L0.00309087 4.30332ZM0 6.069V14.501C0 15.4232 0.366354 16.3077 1.01847 16.9598C1.67058 17.6119 2.55504 17.9783 3.47727 17.9783H18.1591C19.0813 17.9783 19.9658 17.6119 20.6179 16.9598C21.27 16.3077 21.6364 15.4232 21.6364 14.501V6.069L21.2299 6.29541L11.1845 11.7045C11.0719 11.7651 10.946 11.7968 10.8182 11.7968C10.6903 11.7968 10.5645 11.7651 10.4519 11.7045L0.397182 6.29L0 6.069Z"
          fill="#616689"
        />
      </g>
    </svg>
  ),
  wa: (props: React.SVGAttributes<SVGElement>) => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Frame 28">
        <path
          id="Vector"
          d="M12.8388 11.6537L15.0505 12.7577C14.9457 13.2816 14.6623 13.7528 14.2488 14.0911C13.8353 14.4294 13.3172 14.6137 12.783 14.6127C10.9473 14.6106 9.18743 13.8805 7.88942 12.5825C6.59141 11.2845 5.86129 9.52461 5.85925 7.68894C5.8591 7.15535 6.04385 6.6382 6.38205 6.22548C6.72026 5.81276 7.19102 5.52998 7.71424 5.42526L8.81819 7.63702L7.87868 9.03523C7.80847 9.14054 7.76533 9.26155 7.75309 9.38752C7.74084 9.5135 7.75987 9.64055 7.80848 9.75741C8.3589 11.0656 9.39961 12.1063 10.7078 12.6567C10.825 12.7075 10.953 12.7283 11.0803 12.7172C11.2075 12.7061 11.33 12.6635 11.4367 12.5933L12.8388 11.6537ZM20.476 9.99686C20.4764 11.7235 20.0298 13.4208 19.1795 14.9236C18.3293 16.4264 17.1045 17.6835 15.6243 18.5725C14.1441 19.4615 12.459 19.9522 10.7329 19.9967C9.00687 20.0412 7.29868 19.6381 5.77463 18.8265L2.50028 19.918C2.22918 20.0084 1.93826 20.0215 1.66013 19.9559C1.38199 19.8903 1.12763 19.7484 0.92556 19.5464C0.723486 19.3443 0.581684 19.0899 0.516046 18.8118C0.450408 18.5337 0.463528 18.2428 0.553936 17.9717L1.64539 14.6973C0.932 13.3561 0.533547 11.8699 0.480273 10.3517C0.426999 8.83343 0.720304 7.32301 1.33792 5.93506C1.95554 4.5471 2.88125 3.31809 4.04477 2.34131C5.20829 1.36453 6.57904 0.665651 8.05299 0.29773C9.52693 -0.0701918 11.0653 -0.0974897 12.5514 0.217908C14.0375 0.533306 15.4322 1.18311 16.6296 2.118C17.827 3.05288 18.7958 4.24828 19.4622 5.61345C20.1287 6.97862 20.4754 8.47769 20.476 9.99686ZM16.6295 12.3048C16.6296 12.1618 16.5899 12.0217 16.5148 11.9001C16.4398 11.7785 16.3323 11.6802 16.2045 11.6162L13.1273 10.0776C13.0061 10.0173 12.8712 9.98993 12.7361 9.99838C12.6011 10.0068 12.4706 10.0507 12.358 10.1257L10.9453 11.0681C10.2968 10.7116 9.7632 10.178 9.40671 9.5295L10.3491 8.11687C10.4241 8.0042 10.468 7.87374 10.4764 7.73867C10.4849 7.6036 10.4575 7.46869 10.3972 7.34756L8.85858 4.27035C8.79481 4.14156 8.69623 4.0332 8.57403 3.95757C8.45183 3.88194 8.31088 3.84205 8.16717 3.84242C7.14701 3.84242 6.16863 4.24768 5.44726 4.96904C4.7259 5.6904 4.32064 6.66878 4.32064 7.68894C4.32319 9.93252 5.21557 12.0835 6.80202 13.6699C8.38847 15.2564 10.5394 16.1487 12.783 16.1513C13.2881 16.1513 13.7883 16.0518 14.255 15.8585C14.7217 15.6652 15.1457 15.3819 15.5029 15.0247C15.8601 14.6675 16.1434 14.2435 16.3367 13.7768C16.53 13.3101 16.6295 12.8099 16.6295 12.3048Z"
          fill="#616689"
        />
      </g>
    </svg>
  ),
};
