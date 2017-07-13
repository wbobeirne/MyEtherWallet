import React, { Component } from 'react';
import PropTypes from 'prop-types';
import translate from 'translations';

class SaveWallet extends Component {
  static propTypes = {
    // state
    hasDownloadedWalletFile: PropTypes.bool,
    // actions
    downloadFileGenerateWallet: PropTypes.func,
    confirmContinueToPaperGenerateWallet: PropTypes.func
  };

  render() {
    const {
      hasDownloadedWalletFile,
      downloadFileGenerateWallet,
      confirmContinueToPaperGenerateWallet
    } = this.props;

    return (
      <div>
        <h1>
          {translate('GEN_Label_2')}
        </h1>
        <br />
        <div className="col-sm-8 col-sm-offset-2">
          <div aria-hidden="true" className="account-help-icon">
            <img
              src="https://myetherwallet.com/images/icon-help.svg"
              className="help-icon"
            />
            <p className="account-help-text">
              {translate('x_KeystoreDesc')}
            </p>
            <h4>
              {translate('x_Keystore2')}
            </h4>
          </div>
          <a
            role="button"
            className="btn btn-primary btn-block"
            href="blob:https://myetherwallet.com/2455ae32-916f-4224-a806-414bbe680168"
            download="UTC--2017-04-26T23-07-03.538Z--c5b7fff4e1669e38e8d6bc8fffe7e562b2b70f43"
            aria-label="Download Keystore File (UTC / JSON · Recommended · Encrypted)"
            aria-describedby="x_KeystoreDesc"
            onClick={() => downloadFileGenerateWallet()}
          >
            {translate('x_Download')}
          </a>
          <p className="sr-only" id="x_KeystoreDesc">
            {translate('x_KeystoreDesc')}
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="col-xs-12 alert alert-danger">
          <span>
            MyEtherWallet.com is not a web wallet &amp; does not store or
            transmit this secret information at any time. <br />
            <strong>
              If you do not save your wallet file and password, we cannot
              recover them.
            </strong>
            <br />
            Save your wallet file now &amp; back it up in a second location (not
            on your computer).
            <br />
            <br />
            <a
              role="button"
              className={`btn btn-info ${hasDownloadedWalletFile
                ? ''
                : 'disabled'}`}
              onClick={() => confirmContinueToPaperGenerateWallet()}
            >
              {' '}I understand. Continue.{' '}
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default SaveWallet;