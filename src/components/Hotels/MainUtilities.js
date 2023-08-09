const MainUtilities = (props) => {
    const { mainUtiLities = [] } = props;

    const hotelMainUtilityElement = mainUtiLities.map((mainUtiLity) => {
        return (
            <div class="room-options-detail col-6">
                <div className='row'>
                    <img src={mainUtiLity.mainUtiLitiesImg} className="col-3" alt="..." />
                    <div className="col-8" style={{ fontWeight: "550", fontSize: "14px", lineHeight: "30px" }}>
                        {mainUtiLity.title}
                    </div>
                </div>
            </div>);
    });
    return (
        <>
            {
                hotelMainUtilityElement
            }
        </>
    )
}

export default MainUtilities