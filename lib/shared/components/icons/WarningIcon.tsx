type WarningIconProps = {
  width: number | string
  height: number | string
}

export function WarningIcon({ width, height }: WarningIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // eslint-disable-next-line max-len
        d="M10.2898 3.8602L1.81978 18.0002C1.64514 18.3026 1.55274 18.6455 1.55177 18.9947C1.55079 19.3439 1.64127 19.6873 1.8142 19.9907C1.98714 20.2941 2.2365 20.547 2.53748 20.7241C2.83847 20.9012 3.18058 20.9964 3.52978 21.0002H20.4698C20.819 20.9964 21.1611 20.9012 21.4621 20.7241C21.7631 20.547 22.0124 20.2941 22.1854 19.9907C22.3583 19.6873 22.4488 19.3439 22.4478 18.9947C22.4468 18.6455 22.3544 18.3026 22.1798 18.0002L13.7098 3.8602C13.5315 3.56631 13.2805 3.32332 12.981 3.15469C12.6814 2.98605 12.3435 2.89746 11.9998 2.89746C11.656 2.89746 11.3181 2.98605 11.0186 3.15469C10.7191 3.32332 10.468 3.56631 10.2898 3.8602Z"
        stroke="#2D3748"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 9V13"
        stroke="#2D3748"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 17H12.01"
        stroke="#2D3748"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
