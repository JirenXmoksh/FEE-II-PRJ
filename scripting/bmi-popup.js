document.addEventListener('DOMContentLoaded', function() {
    const React = window.React;
    const ReactDOM = window.ReactDOM;
    const { useState, useEffect } = React;
  
    function BMIPopup() {
      const [showPopup, setShowPopup] = useState(false);
      const [showCalculator, setShowCalculator] = useState(false);
      const [height, setHeight] = useState('');
      const [weight, setWeight] = useState('');
      const [bmi, setBMI] = useState(null);
      const [bmiMessage, setBmiMessage] = useState('');
  
      useEffect(() => {
        const timer = setTimeout(() => {
          const neverShow = localStorage.getItem('neverShowBMIPopup');
          if (neverShow !== 'true') {
            setShowPopup(true);
          }
        }, 5000);
  
        // Add event listener for the BMI Calculator link in the dropdown
        const bmiCalculatorLink = document.getElementById('bmiCalculatorLink');
        if (bmiCalculatorLink) {
          bmiCalculatorLink.addEventListener('click', (e) => {
            e.preventDefault();
            setShowPopup(true);
            setShowCalculator(true);
          });
        }
  
        return () => {
          clearTimeout(timer);
          if (bmiCalculatorLink) {
            bmiCalculatorLink.removeEventListener('click', () => {});
          }
        };
      }, []);
  
      const handleYes = () => {
        setShowCalculator(true);
      };
  
      const handleLater = () => {
        setShowPopup(false);
        setTimeout(() => {
          setShowPopup(true);
        }, 60000); // reopen after 1 minute
      };
  
      const handleNo = () => {
        setShowPopup(false);
        localStorage.setItem('neverShowBMIPopup', 'true');
      };
  
      const handleClose = () => {
        setShowPopup(false);
        setShowCalculator(false);
      };
  
      const calculateBMI = () => {
        const heightInMeters = parseFloat(height) / 100;
        const weightInKg = parseFloat(weight);
        const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
        setBMI(parseFloat(calculatedBMI.toFixed(2)));
  
        if (calculatedBMI < 18.5) {
          setBmiMessage('Underweight');
        } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
          setBmiMessage('Normal weight');
        } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
          setBmiMessage('Overweight');
        } else {
          setBmiMessage('Obese');
        }
      };
  
      if (!showPopup) return null;
  
      return React.createElement(
        'div',
        {
          className: 'bmi-popup-overlay',
          style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          },
        },
        React.createElement(
          'div',
          {
            className: 'bmi-popup-content',
            style: {
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              maxWidth: '400px',
              width: '100%',
              position: 'relative',
            },
          },
          React.createElement(
            'button',
            {
              onClick: handleClose,
              className: 'close-button',
            },
            React.createElement('i', { className: 'fa fa-close', 'aria-hidden': 'true' })
          ),
          React.createElement(
            'h2',
            { style: { marginBottom: '20px' } },
            'Check your BMI'
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'div',
              { style: { marginBottom: '10px' } },
              React.createElement('label', { htmlFor: 'height' }, 'Height (cm)'),
              React.createElement('input', {
                type: 'number',
                id: 'height',
                value: height,
                onChange: (e) => setHeight(e.target.value),
                style: { width: '100%', padding: '5px', borderRadius: '7px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'white' },
              })
            ),
            React.createElement(
              'div',
              { style: { marginBottom: '10px' } },
              React.createElement('label', { htmlFor: 'weight' }, 'Weight (kg)'),
              React.createElement('input', {
                type: 'number',
                id: 'weight',
                value: weight,
                onChange: (e) => setWeight(e.target.value),
                style: { width: '100%', padding: '5px', borderRadius: '7px', border: '2px solid white', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'white'  },
              })
            ),
            bmi !== null &&
              React.createElement(
                'div',
                { style: { marginTop: '10px' } },
                React.createElement('p', null, `You have a BMI of ${bmi}`),
                React.createElement('p', null, `You are ${bmiMessage}`)
              )
          ),
          React.createElement(
            'div',
            { style: { marginTop: '20px', textAlign: 'right' } },
            React.createElement('button', { onClick: calculateBMI }, 'BMI')
          )
        )
      );
    }
  
    const root = ReactDOM.createRoot(document.getElementById('bmi-popup-root'));
    root.render(React.createElement(BMIPopup));
  });