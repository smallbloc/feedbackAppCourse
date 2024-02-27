import Card from "./shared/Card"

function FizzBuzzPractice() {
    const fizzBuzzRunner = (e) => {
        e.preventDefault()
        /* -- Solution 1: Standard FB --
        for (var i = 1; i < 100; i++) {
            if (i % 15 == 0) console.log('Fizz Buzz')
            else if (i % 3 == 0) console.log('Fizz')
            else if (i % 5 == 0) console.log('Buzz')
            else console.log(i)
        }
        */
        /* -- Solution 2: FB w/ different numbers and edits --
        for (var i = 1; i < 100; i++) {
            if (i % 14 == 0) console.log('Big Foot')
            else if (i % 2 == 0) console.log(i + ' Big')
            else if (i % 7 == 0) console.log(i + ' Foot')
            else console.log(i)
        }
        */
        /* -- Solution 3: FB using ternary --
        for (let i = 0; i < 100;)
            console.log((++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)
        */
        /* -- Playing with Constructors --
        https://madasamy.medium.com/15-javascript-concepts-that-every-nodejs-programmer-must-to-know-6894f5157cb7

        const Bike = (model, color) => {
            const getDetails = () => {
                return model + ' bike is ' + color
            }
        }

        var bikeObj1 = new Bike('BMW', 'Black')
        var bikeObj2 = new Bike('BMW', 'Red')

        console.log(bikeObj1.getDetails())
        console.log(bikeObj2.getDetails())
        */
    }

  return (
    <Card>
        FizzBuzz stuff here
        <a href='#' className='btn' onClick={fizzBuzzRunner}>Fizz Me</a>
    </Card>
  )
}

export default FizzBuzzPractice
