import classnames from 'classnames'
import classes from './ShowProgress.module.scss'

type MyPosition = number

type PersonOnRoute = {
    name: string
    position: number
}

type Props = {
    routeName: string
    myPosition: MyPosition
    peopleOnRoute: PersonOnRoute[]
}

const ProgressLabel = ({ name, position, main, zIndex }: PersonOnRoute & { main?: boolean, zIndex: number }) => (
    <li
        key={name}
        className={classnames([
            classes.ShowProgress__Label,
            main? classes.YouLabel : classes.OtherLabel
        ])}
        style={{
            left: `clamp(0px, ${parsePosition(position)}%, calc(${parsePosition(position)}% - 60px))`,
            zIndex: zIndex }}>
            {name}
    </li>
)

// should take a number between 0 and 1 and return a number between 0 and 100, with 2 decimal places
const parsePosition = (position: number) => {
    return (position * 100).toFixed(2)
}

const parseTitle = (position: MyPosition) => {
    return position === 1? 'finished!' : `${parsePosition(position)}%`
}

const ShowProgress = ({ routeName, myPosition, peopleOnRoute }: Props) => {
    return (
        <div className={classes.ShowProgress}>
            <h2>{ routeName }, {parseTitle(myPosition)}</h2>

            <div className={classes.ShowProgress__Bar} />

            <ul>
                <ProgressLabel key="you" name="You" position={myPosition} main zIndex={10} />
                {peopleOnRoute.map((person, i) => (
                    <ProgressLabel key={person.name} name={person.name} position={person.position} zIndex={i+1}/>
                ))}
            </ul>
        </div>
    )

}

export default ShowProgress