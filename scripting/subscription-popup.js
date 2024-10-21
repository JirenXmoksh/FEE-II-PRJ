function SubscriptionPopup() {
    const [showPopup, setShowPopup] = React.useState(false);

    React.useEffect(() => {
        const showPopupInterval = setInterval(() => {
            setShowPopup(true);
        },1000); // 1 minutes in milliseconds

        return () => clearInterval(showPopupInterval);
    }, []);

    const handleGoPro = () => {
        window.location.href = 'source/Pricing.html';
    };

    const handleNotNow = () => {
        setShowPopup(false);
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    if (!showPopup) return null;

    return (
        <div className="subscription-popup-overlay">
            <div className="subscription-popup-content">
                <button onClick={handleClose} className="close-button">
                    <i className="fa fa-close" aria-hidden="true"></i>
                </button>
                <h2>Upgrade to Pro!</h2>
                <p>Level your fitness game up by subscribing to FIT FUSION standard/premium and get access to exclusive features and content.</p>
                <div className="d-flex justify-content-end mt-4">
                    <button className="btn me-2 btn-primary" onClick={handleGoPro}>Subscribe</button>
                    <button className="btn" onClick={handleNotNow}>Not Now</button>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<SubscriptionPopup />, document.getElementById('subscription-popup-root'));