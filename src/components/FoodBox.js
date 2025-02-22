
function FoodBox(props){

    const handleChange = (e)=>{
        const {name,value} = e.target
        console.log(name, value)
        /*setData(prevState => {
        return {...prevState, [name]:value}
        })*/
    }

    return (
        <>
            <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.image} />
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{props.name}</strong> <br />
                        <small>{props.calories} cal</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                        <input className="input" type="number" name="plus" value={props.quantity}  onChange={handleChange}/>
                        </div>
                        <div className="control">
                        <button className="button is-info"  >
                            +
                        </button>
                        </div>
                    </div>
                    </div>
                </article>
            </div>

        </>
    );
};


export default FoodBox;