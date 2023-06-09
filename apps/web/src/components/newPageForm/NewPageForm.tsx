import React from 'react';
import ButtonPrimary from '../buttonPrimary/ButtonPrimary';
import styles from './NewPageForm.module.css';

const NewPageForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>

          <div className={styles.formSections}>
            <h3>General</h3>
            <div className={styles.formItems}>
              <label htmlFor="monitorType">Monitor Type</label>
              <br />
              <select className={styles.select} id="monitorType">
                <option className={styles.option} value="HTTP(s)">
                  HTTP(s)
                </option>
                <option value="TCP Port">TCP Port</option>
                <option value="DNS">DNS</option>
              </select>
            </div>

            <div className={styles.formItems}>
              <label htmlFor="pageName">Page Name</label>
              <br />
              <input className={styles.inputs} type="text" id="pageName" />
            </div>

            <div className={styles.formItems}>
              <label htmlFor="url">URL</label>
              <br />
              <input className={styles.inputs} type="text" id="url" />
            </div>

            <div className={styles.formItems}>
              <label htmlFor="url">Check every 60 seconds</label>
              <br />
              <input className={styles.inputs} type="number" id="url" />
            </div>

          </div>
        
        <div className={styles.formSections}>
          <h3>Advenced</h3>
          <div className={styles.formItems}>
            <label htmlFor="maxRedirects">Max. Redirects</label>
            <br />
            <input className={styles.inputs} type="number" id="maxRedirects" />
          </div>

          <div className={styles.formItems}>
            <label htmlFor="monitorType">Accepted Status Codes</label>
            <br />
            <select className={styles.select} id="monitorType">
              <option value="100-199">100-199</option>
              <option value="200-299">200-299</option>
            </select>
          </div>
        </div>

        <div className={styles.formSections}>
          <h3>HTTP Options</h3>
          <div className={styles.formItems}>
            <label htmlFor="monitorType">Method</label>
            <br />
            <select className={styles.select} id="monitorType">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
            </select>
          </div>
        </div>

        <div className={styles.formSections}>
          <ButtonPrimary 
            to="/"
            type="submit"
            onClick={()=>{}}
            >
            Save
          </ButtonPrimary>
        </div>

      </form>
    </div>
  );
};

export default NewPageForm;
