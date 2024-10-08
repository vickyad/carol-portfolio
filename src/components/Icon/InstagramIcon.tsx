import { SizeType } from '../../types/types';

interface InstagramIconProps {
  size?: SizeType;
  color?: string;
}

const InstagramIcon = ({ size = 'base', color }: InstagramIconProps) => {
  return (
    <svg
      width={size === 'sm' ? '1.5rem' : '2.125rem'}
      height={size === 'sm' ? '1.5rem' : '2.125rem'}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1310_1135)">
        <path
          d="M21.571 8.7207H13.4278C11.107 8.7207 9.21951 10.6082 9.21951 12.9277V21.0709C9.21951 23.3916 11.107 25.2791 13.4278 25.2791H21.571C23.8917 25.2791 25.7792 23.3916 25.7792 21.0709V12.9277C25.7792 10.6069 23.8917 8.7207 21.571 8.7207ZM17.5832 22.0237C14.8138 22.0237 12.5601 19.77 12.5601 17.0006C12.5601 14.2312 14.8138 11.9775 17.5832 11.9775C20.3526 11.9775 22.6063 14.2312 22.6063 17.0006C22.6063 19.77 20.3526 22.0237 17.5832 22.0237ZM22.8989 12.8361C22.2388 12.8361 21.7038 12.3011 21.7038 11.6397C21.7038 10.9783 22.2388 10.4445 22.8989 10.4445C23.5591 10.4445 24.0954 10.9795 24.0954 11.6397C24.0954 12.2998 23.5603 12.8361 22.8989 12.8361Z"
          fill={color ?? '#5E262B'}
        />
        <path
          d="M17.5832 13.7827C15.8091 13.7827 14.3651 15.2254 14.3651 17.0008C14.3651 18.7762 15.8091 20.2189 17.5832 20.2189C19.3572 20.2189 20.8012 18.7762 20.8012 17.0008C20.8012 15.2254 19.3585 13.7827 17.5832 13.7827Z"
          fill={color ?? '#5E262B'}
        />
        <path
          d="M27.3728 0H7.62722C3.69101 0 0.5 3.19101 0.5 7.12722V26.8728C0.5 30.809 3.69101 34 7.62722 34H27.3728C31.309 34 34.5 30.809 34.5 26.8728V7.12722C34.5 3.19101 31.309 0 27.3728 0ZM27.699 21.0722C27.699 24.4502 24.9502 27.199 21.5722 27.199H13.4291C10.0511 27.199 7.30232 24.4502 7.30232 21.0722V12.9291C7.30232 9.5511 10.0511 6.80232 13.4291 6.80232H21.5722C24.9502 6.80232 27.699 9.5511 27.699 12.9291V21.0722Z"
          fill={color ?? '#5E262B'}
        />
      </g>
      <defs>
        <clipPath id="clip0_1310_1135">
          <rect
            width="34"
            height="34"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default InstagramIcon;
