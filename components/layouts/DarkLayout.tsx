import { FC, PropsWithChildren } from "react"

// issue: https://stackoverflow.com/a/71800185
type Props = {};

export const DarkLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '10px',
      padding: '5px',
    }}>
      <h3>Dark Layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}