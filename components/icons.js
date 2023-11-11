import {
  LucideProps,
  Moon,
  SunMedium,
  LucideIcon,
} from "lucide-react"

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props) => (
    <svg
      height="800px"
      width="800px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.999 511.999"
      xmlSpace="preserve"
      {...props}
    >
      <path
        d="M436.645 124.383c-.1-6.979-5.893-12.691-12.875-12.691H88.226c-6.981 0-12.774 5.711-12.875 12.691l-4.564 317.298c-.1 6.979-1.276 18.297-2.611 25.148l-4.794 24.584c-1.334 6.852 3.283 12.458 10.264 12.458h364.709c6.981 0 11.598-5.606 10.263-12.458l-4.793-24.584c-1.335-6.852-2.511-18.168-2.612-25.148l-4.568-317.298z"
        className="fill-amber-500 dark:fill-indigo-500"
      />
      <path
        d="M286.109 111.692L72.461 325.341l-.729 50.645 264.294-264.294h-49.917zm-150.01 0l-61.45 61.449-.728 50.645 112.093-112.095h-49.915v.001zm302.487 147.544L193.952 503.87h49.917l195.427-195.426-.71-49.208zm2.624 182.446l-.498-34.563-96.751 96.751h49.917l48.311-48.31c-.546-4.965-.923-10.068-.979-13.878zm-4.565-317.299c-.051-3.589-1.616-6.836-4.066-9.15L65.073 482.738l-1.692 8.675c-1.334 6.852 3.283 12.458 10.264 12.458h20.212l343.309-343.309-.521-36.179z"
        className="fill-indigo-500 dark:fill-amber-500"
      />
      <path
        d="M448.617 491.413l-4.793-24.584c-1.335-6.852-2.511-18.168-2.612-25.148H70.787c-.1 6.979-1.276 18.297-2.611 25.148l-4.794 24.584c-1.334 6.852 3.283 12.458 10.264 12.458h364.709c6.98-.001 11.597-5.607 10.262-12.458z"
        opacity={0.1}
      />
      <g fill="#fff">
        <circle cx={355.51} cy={168.054} r={28.03} />
        <circle cx={156.488} cy={168.054} r={28.03} />
      </g>
      <path
        d="M456.596 489.856l-4.793-24.584c-1.242-6.369-2.37-17.227-2.463-23.709l-4.566-317.298c-.164-11.416-9.585-20.704-21.004-20.704h-60.213C361.403 46.092 313.986 0 255.999 0S150.594 46.092 148.44 103.563H88.226c-11.417 0-20.84 9.287-21.004 20.703l-4.564 317.298c-.093 6.481-1.221 17.339-2.462 23.709l-4.794 24.585c-1.102 5.658.254 11.316 3.72 15.522 3.466 4.207 8.76 6.619 14.524 6.619h364.709c5.764 0 11.058-2.413 14.524-6.62 3.464-4.206 4.82-9.864 3.717-15.523zM255.999 16.259c49.021 0 89.137 38.802 91.281 87.304H164.718c2.143-48.502 42.259-87.304 91.281-87.304zm184.33 478.783c-.372.451-1.073.699-1.975.699H73.644c-.902 0-1.603-.248-1.975-.699s-.481-1.188-.309-2.072l4.794-24.585c1.441-7.389 2.653-19.068 2.761-26.586L83.48 124.5c.037-2.535 2.21-4.678 4.747-4.678h60.128v48.237a8.13 8.13 0 0016.26 0v-48.237h182.769v48.237a8.13 8.13 0 0016.26 0v-48.237h60.128c2.536 0 4.71 2.142 4.747 4.678l4.566 317.298c.107 7.52 1.32 19.199 2.761 26.588l4.793 24.584c.17.885.062 1.621-.31 2.072z"
        className="fill-black dark:fill-indigo-500"
      />
    </svg>
  ),
}