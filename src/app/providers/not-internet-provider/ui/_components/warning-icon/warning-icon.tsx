import style from './style.module.scss';

export const WarningIcon = () => {
  return (
    <div className={style.icon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.0785 3.11677C14.6651 2.78653 15.3269 2.61304 16 2.61304C16.6732 2.61304 17.335 2.78653 17.9215 3.11677C18.5081 3.44702 18.9997 3.92287 19.3488 4.49841L19.3524 4.50435L19.3524 4.50436L30.6457 23.3577L30.6559 23.375C30.9978 23.9672 31.1788 24.6387 31.1807 25.3226C31.1826 26.0064 31.0054 26.6789 30.6668 27.2731C30.3281 27.8672 29.8398 28.3623 29.2503 28.7092C28.6609 29.056 27.991 29.2424 27.3071 29.25L27.2934 29.2501V29.25H4.70669H4.69296L4.69296 29.25C4.0091 29.2424 3.33914 29.056 2.74972 28.7092C2.16029 28.3623 1.67196 27.8672 1.33329 27.2731C0.994626 26.6789 0.817436 26.0064 0.819351 25.3226C0.821266 24.6387 1.00222 23.9672 1.34421 23.375L1.35436 23.3577L12.6477 4.50436L12.6513 4.4984L12.6513 4.49841C13.0004 3.92287 13.4919 3.44702 14.0785 3.11677ZM16 5.11304C15.7565 5.11304 15.5172 5.17579 15.305 5.29524C15.0937 5.41422 14.9165 5.58545 14.7903 5.79252L14.7888 5.79498L3.50498 24.6324C3.384 24.8449 3.32003 25.085 3.31934 25.3296C3.31865 25.5769 3.38274 25.8202 3.50523 26.0351C3.62773 26.25 3.80436 26.4291 4.01756 26.5545C4.22908 26.679 4.46927 26.7463 4.71459 26.75H27.2855C27.5308 26.7463 27.771 26.679 27.9825 26.5545C28.1957 26.4291 28.3723 26.25 28.4948 26.0351C28.6173 25.8202 28.6814 25.5769 28.6807 25.3296C28.68 25.085 28.6161 24.8449 28.4951 24.6325L17.2113 5.79498L17.2097 5.79242C17.0835 5.58539 16.9063 5.4142 16.695 5.29524C16.4829 5.17579 16.2435 5.11304 16 5.11304ZM16 10.75C16.6904 10.75 17.25 11.3097 17.25 12V17.3334C17.25 18.0237 16.6904 18.5834 16 18.5834C15.3097 18.5834 14.75 18.0237 14.75 17.3334V12C14.75 11.3097 15.3097 10.75 16 10.75ZM16 21.4167C15.3097 21.4167 14.75 21.9764 14.75 22.6667C14.75 23.3571 15.3097 23.9167 16 23.9167H16.0134C16.7037 23.9167 17.2634 23.3571 17.2634 22.6667C17.2634 21.9764 16.7037 21.4167 16.0134 21.4167H16Z"
          fill="#9BA1A7"
        />
      </svg>
    </div>
  );
};
