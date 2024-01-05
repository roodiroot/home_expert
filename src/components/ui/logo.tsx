"use client";

import { HOME_PAGE } from "@/utils/path";
import { useRouter } from "next/navigation";

export interface LogoProps {
  size?: number;
  color?: string;
  logoColor?: string;
  strokeWidth?: number;
  className?: string;
}
const Logo: React.FC<LogoProps> = ({
  size = 197,
  color = "#111827",
  logoColor = "#4F46E5",
  className,
}) => {
  const router = useRouter();
  return (
    <svg
      onClick={() => router.push(HOME_PAGE)}
      viewBox='0 0 197 56'
      fill='none'
      className={`cursor-pointer ${className}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.6829 0.7522C22.4366 -0.274334 24.6134 -0.250314 26.3439 0.81466L42.8825 10.9923C44.5091 11.9933 45.5 13.7664 45.5 15.6764V34C45.5 37.0376 43.0376 39.5 40 39.5H17.9817L0.5 55.733V15.7201C0.5 13.7669 1.53588 11.9602 3.22151 10.9735L20.6829 0.7522ZM23.7234 5.07295C23.5661 4.97613 23.3682 4.97395 23.2088 5.06727L5.74741 15.2886C5.59417 15.3783 5.5 15.5425 5.5 15.7201V44.267L16.0183 34.5H40C40.2761 34.5 40.5 34.2761 40.5 34V15.6764C40.5 15.5028 40.4099 15.3416 40.262 15.2506L23.7234 5.07295Z'
        fill={logoColor}
      />
      <path
        d='M73.3981 23.316H75.3341V29.102H72.3641V26H63.3221V29.102H60.3521V23.316H61.5181C62.7061 22.3333 63.3001 19.1873 63.3001 13.878V11.48H73.3981V23.316ZM64.7521 23.316H70.4281V14.164H66.0941C66.0207 18.6667 65.5734 21.7173 64.7521 23.316Z'
        fill={color}
      />
      <path
        d='M76.0587 20.544C76.0293 18.9893 76.594 17.6473 77.7527 16.518C78.9113 15.3887 80.29 14.8387 81.8887 14.868C83.4873 14.8387 84.866 15.3887 86.0247 16.518C87.198 17.6473 87.77 18.9893 87.7407 20.544C87.77 22.0987 87.198 23.448 86.0247 24.592C84.8513 25.7213 83.4653 26.2713 81.8667 26.242C80.268 26.2713 78.8893 25.7213 77.7307 24.592C76.5867 23.448 76.0293 22.0987 76.0587 20.544ZM83.8907 22.678C84.4333 22.1207 84.7047 21.4167 84.7047 20.566C84.7047 19.7153 84.4333 19.004 83.8907 18.432C83.3627 17.86 82.6953 17.574 81.8887 17.574C81.0673 17.574 80.3927 17.86 79.8647 18.432C79.3367 18.9893 79.0727 19.7007 79.0727 20.566C79.0727 21.4167 79.3367 22.1207 79.8647 22.678C80.3927 23.2353 81.0673 23.514 81.8887 23.514C82.6953 23.514 83.3627 23.2353 83.8907 22.678Z'
        fill={color}
      />
      <path
        d='M89.6854 26V14.868H90.6534L95.7574 20.566L100.905 14.868H101.851V26H98.8814V20.764L96.2414 23.734H95.2514L92.6334 20.786V26H89.6854Z'
        fill={color}
      />
      <path
        d='M117.941 18.74C117.985 20.808 117.237 22.59 115.697 24.086C114.172 25.582 112.353 26.308 110.241 26.264C108.848 26.264 107.587 25.9487 106.457 25.318C105.328 24.6727 104.448 23.7853 103.817 22.656L106.061 21.072C107.103 22.7 108.489 23.514 110.219 23.514C111.363 23.514 112.346 23.1913 113.167 22.546C114.003 21.886 114.539 21.0133 114.773 19.928H109.053V17.398H114.729C114.465 16.3567 113.923 15.528 113.101 14.912C112.28 14.2813 111.319 13.966 110.219 13.966C108.489 13.966 107.103 14.78 106.061 16.408L103.817 14.824C104.463 13.6947 105.343 12.8147 106.457 12.184C107.587 11.5387 108.841 11.216 110.219 11.216C112.346 11.172 114.172 11.898 115.697 13.394C117.237 14.8753 117.985 16.6573 117.941 18.74Z'
        fill={color}
      />
      <path
        d='M130.673 26H127.153L122.841 20.236V26H119.893V15.11H122.841V20.192L126.955 15.11H130.321L126.207 20.082L130.673 26Z'
        fill={color}
      />
      <path
        d='M130.953 20.544C130.953 18.96 131.518 17.618 132.647 16.518C133.776 15.418 135.155 14.868 136.783 14.868C138.924 14.868 140.501 15.7627 141.513 17.552L139.445 19.158C138.712 18.102 137.839 17.574 136.827 17.574C135.991 17.574 135.302 17.86 134.759 18.432C134.231 18.9893 133.967 19.6933 133.967 20.544C133.967 21.4093 134.231 22.128 134.759 22.7C135.302 23.2573 135.991 23.536 136.827 23.536C137.839 23.536 138.712 23.0153 139.445 21.974L141.513 23.558C141.029 24.4087 140.376 25.076 139.555 25.56C138.748 26.0293 137.824 26.264 136.783 26.264C135.184 26.2933 133.806 25.7433 132.647 24.614C131.488 23.47 130.924 22.1133 130.953 20.544Z'
        fill={color}
      />
      <path
        d='M143.334 26V15.11H153.124V26H150.154V17.618H146.282V26H143.334Z'
        fill={color}
      />
      <path
        d='M165.707 21.556H158.073C158.249 22.2453 158.601 22.7807 159.129 23.162C159.671 23.5287 160.339 23.712 161.131 23.712C162.201 23.712 163.213 23.3453 164.167 22.612L165.399 24.636C164.093 25.7213 162.641 26.264 161.043 26.264C159.371 26.2933 157.948 25.7507 156.775 24.636C155.616 23.5067 155.051 22.15 155.081 20.566C155.051 18.9967 155.601 17.6473 156.731 16.518C157.86 15.3887 159.209 14.8387 160.779 14.868C162.275 14.868 163.499 15.352 164.453 16.32C165.421 17.288 165.905 18.4907 165.905 19.928C165.905 20.456 165.839 20.9987 165.707 21.556ZM158.073 19.466H163.023C163.008 18.806 162.773 18.278 162.319 17.882C161.879 17.4713 161.329 17.266 160.669 17.266C160.038 17.266 159.488 17.464 159.019 17.86C158.549 18.256 158.234 18.7913 158.073 19.466Z'
        fill={color}
      />
      <path
        d='M177.77 16.496C178.782 17.5667 179.288 18.916 179.288 20.544C179.288 22.172 178.782 23.536 177.77 24.636C176.773 25.7213 175.519 26.264 174.008 26.264C172.644 26.264 171.559 25.824 170.752 24.944V29.96H167.782V15.11H170.51V16.474C171.258 15.4033 172.424 14.868 174.008 14.868C175.519 14.868 176.773 15.4107 177.77 16.496ZM176.274 20.566C176.274 19.6713 176.01 18.9453 175.482 18.388C174.954 17.8307 174.28 17.552 173.458 17.552C172.666 17.552 172.006 17.816 171.478 18.344C170.965 18.872 170.708 19.6053 170.708 20.544C170.708 21.4827 170.965 22.2233 171.478 22.766C172.006 23.294 172.666 23.558 173.458 23.558C174.265 23.558 174.932 23.2793 175.46 22.722C176.003 22.1647 176.274 21.446 176.274 20.566Z'
        fill={color}
      />
      <path
        d='M183.163 26V17.618H179.819V15.11H189.477V17.618H186.111V26H183.163Z'
        fill={color}
      />
      <path
        d='M159.747 36V30.06H161.916C162.516 30.06 163.002 30.231 163.374 30.573C163.746 30.909 163.932 31.344 163.932 31.878C163.932 32.412 163.743 32.85 163.365 33.192C162.993 33.534 162.51 33.705 161.916 33.705H160.701V36H159.747ZM160.701 32.859H161.898C162.228 32.859 162.486 32.772 162.672 32.598C162.858 32.424 162.951 32.187 162.951 31.887C162.951 31.587 162.858 31.35 162.672 31.176C162.486 30.996 162.228 30.906 161.898 30.906H160.701V32.859Z'
        fill={color}
      />
      <path
        d='M168.632 34.101H165.338C165.398 34.461 165.557 34.746 165.815 34.956C166.079 35.16 166.4 35.262 166.778 35.262C167.246 35.262 167.675 35.088 168.065 34.74L168.515 35.388C168.017 35.862 167.429 36.099 166.751 36.099C166.079 36.099 165.515 35.88 165.059 35.442C164.603 34.998 164.375 34.449 164.375 33.795C164.363 33.159 164.585 32.613 165.041 32.157C165.497 31.695 166.037 31.47 166.661 31.482C167.243 31.482 167.729 31.677 168.119 32.067C168.509 32.451 168.704 32.931 168.704 33.507C168.704 33.681 168.68 33.879 168.632 34.101ZM165.356 33.363H167.759C167.753 33.033 167.642 32.772 167.426 32.58C167.21 32.382 166.943 32.283 166.625 32.283C166.313 32.283 166.04 32.382 165.806 32.58C165.578 32.772 165.428 33.033 165.356 33.363Z'
        fill={color}
      />
      <path
        d='M169.616 36V31.482H169.949L172.028 33.885L174.116 31.482H174.431V36H173.486V33.444L172.19 34.947H171.857L170.57 33.453V36H169.616Z'
        fill={color}
      />
      <path
        d='M175.353 33.786C175.341 33.156 175.566 32.613 176.028 32.157C176.496 31.695 177.048 31.47 177.684 31.482C178.326 31.47 178.881 31.695 179.349 32.157C179.817 32.619 180.045 33.162 180.033 33.786C180.045 34.416 179.817 34.962 179.349 35.424C178.881 35.886 178.326 36.111 177.684 36.099C177.048 36.111 176.496 35.886 176.028 35.424C175.566 34.956 175.341 34.41 175.353 33.786ZM179.061 33.795C179.061 33.387 178.929 33.045 178.665 32.769C178.401 32.487 178.077 32.346 177.693 32.346C177.303 32.346 176.976 32.487 176.712 32.769C176.448 33.045 176.316 33.387 176.316 33.795C176.316 34.203 176.445 34.545 176.703 34.821C176.967 35.091 177.294 35.226 177.684 35.226C178.074 35.226 178.401 35.088 178.665 34.812C178.929 34.536 179.061 34.197 179.061 33.795Z'
        fill={color}
      />
      <path
        d='M180.946 36V31.581H181.9V33.273H183.799V31.581H184.744V36H183.799V34.092H181.9V36H180.946Z'
        fill={color}
      />
      <path
        d='M186.833 36V32.4H185.411V31.581H189.2V32.4H187.778V36H186.833Z'
        fill={color}
      />
      <path
        d='M192.167 11.5193L192.157 8.80547L193.532 8.80025C193.642 8.79983 193.763 8.83124 193.893 8.89449C194.023 8.95528 194.134 9.05047 194.225 9.18005C194.318 9.30718 194.366 9.4688 194.366 9.66492C194.367 9.86349 194.32 10.0328 194.225 10.1729C194.13 10.3106 194.014 10.4152 193.877 10.4868C193.742 10.5584 193.615 10.5944 193.495 10.5949L192.502 10.5987L192.5 10.1574L193.309 10.1543C193.39 10.154 193.477 10.1132 193.57 10.032C193.665 9.95073 193.712 9.8292 193.712 9.6674C193.711 9.5007 193.663 9.38811 193.567 9.32964C193.474 9.27116 193.391 9.24205 193.32 9.24232L192.754 9.24447L192.763 11.517L192.167 11.5193ZM193.802 10.2334L194.484 11.5105L193.829 11.513L193.162 10.2358L193.802 10.2334ZM193.203 13.1333C192.796 13.1349 192.414 13.0603 192.058 12.9097C191.702 12.759 191.389 12.5494 191.118 12.2808C190.847 12.0121 190.635 11.7004 190.482 11.3455C190.329 10.9906 190.251 10.6097 190.25 10.2027C190.248 9.79577 190.323 9.41428 190.473 9.05824C190.624 8.70219 190.834 8.38883 191.102 8.11814C191.371 7.84745 191.683 7.63544 192.038 7.4821C192.393 7.32875 192.773 7.25131 193.18 7.24977C193.587 7.24822 193.969 7.32277 194.325 7.47341C194.681 7.62406 194.994 7.8337 195.265 8.10234C195.536 8.37098 195.748 8.68274 195.901 9.03763C196.054 9.39252 196.132 9.77344 196.133 10.1804C196.135 10.5873 196.06 10.9688 195.91 11.3249C195.759 11.6809 195.549 11.9943 195.281 12.265C195.012 12.5357 194.7 12.7477 194.345 12.901C193.991 13.0544 193.61 13.1318 193.203 13.1333ZM193.2 12.4273C193.612 12.4257 193.987 12.3238 194.324 12.1215C194.662 11.9192 194.93 11.6485 195.13 11.3094C195.33 10.9704 195.429 10.5949 195.427 10.1831C195.426 9.77121 195.324 9.39652 195.122 9.05898C194.919 8.72143 194.649 8.45279 194.309 8.25306C193.97 8.05332 193.595 7.95423 193.183 7.95579C192.771 7.95736 192.397 8.05929 192.059 8.2616C191.721 8.46391 191.453 8.73459 191.253 9.07366C191.053 9.41273 190.954 9.78819 190.956 10.2C190.957 10.6119 191.059 10.9866 191.262 11.3241C191.464 11.6617 191.735 11.9303 192.074 12.13C192.413 12.3298 192.788 12.4289 193.2 12.4273Z'
        fill={color}
      />
    </svg>
  );
};

export default Logo;
