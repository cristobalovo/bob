import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';
import { Input, Tooltip, Icon, Avatar, Button } from 'antd';
import { setSearchText, setCurrentDomainRegStatus, setNonRenderingSearch } from '../../../redux/actions/actionCreators/search';
import { setProvider, setWallet } from  '../../../redux/actions/actionCreators/crypto';

import { 
    getWalletProvider, 
    getWallet,
    getContractInstance,
    DomainRegistry,
    isUrlInRegistry,
  } from '../../../service/contracts/shared';
// import { setSearchText } from '../../../redux/actions/actionCreators/search';
import { hashDomainUrl } from '../../../shared/helpers/domain';
// import { getWalletProvider } from '../../../shared/helpers/provider';
import { generateWallet } from '../../../shared/helpers/user';
import { deployDomainRegistry, deployDomainDAO, deployAdvertisingDAO } from '../../../shared/helpers/deployment';
import Box from '3box';
import HDWalletProvider from "truffle-hdwallet-provider";
import { toggleSider, setCommentFeed } from '../../../redux/actions/actionCreators/siteNavigation';
import { 
  get3BoxWalletProvider, 
  getBobBox,
  getDomainSpace,
  createPostThread,
  getAllThreads,
  commentOnPostThread,
  createAdminThread
} from '../../../service/utils-3box';

const Nav = () => {
  const [url, setUrl] = useState("")
  const siderOpen = useSelector(state => state.navigation.siderOpen);
  const logoLink = 'https://avatars1.githubusercontent.com/u/19377315?s=400&v=4';
  const dispatch = useDispatch();

  //
  const searchState = useSelector(state => state.search.currentSearch);
  const [provider, setProvider] = useState({})
  const [wallet, setWallet] = useState({})
  const [currentDomainRegistered, setDomainRegistration] = useState(false);
  let registryAddress = "0x132efA3675cd66aA2780e01C095e2337188b0F6b";

  useEffect(() => {
    setupUser()
  }, [])

  // NOTE: this will check what is in state -> not in redux
  const isDomainRegistered = async (p, w) => {              
    const registryInstance = getContractInstance(DomainRegistry.abi, registryAddress, w.privateKey );
    const isRegistered = await isUrlInRegistry(registryInstance, url);
    setDomainRegistration(isRegistered);    
    dispatch(setCurrentDomainRegStatus(isRegistered)); //set for finance or others
  }

    // sets wallet and provider
    const setupUser = async () => {
      const providerObj = getWalletProvider();
      setProvider(providerObj);
      const walletObj = await getWallet(providerObj);
      setWallet(walletObj);
    }

  // have the url ready if the browser needs it :)
  const handleChange = (e) => {
    if (e.key === 'Enter') {
        dispatch(setSearchText(url)) // will change what is displayed in the browser
        return;
    }
    setUrl(e.target.value)
    dispatch(setNonRenderingSearch(e.target.value)) // i want to check every hash -> dont want to force to render the site for this
    // isDomainRegistered(provider, wallet)
  }

	const submit = async() => {
    const url = "https://google.com/dogs5"
    const provider = await get3BoxWalletProvider();
    console.log({provider})
    // fetch initial topics
    const bobBox = await getBobBox();
    let space = await getDomainSpace(url);
    console.log({space})
    let thread = await createPostThread(
      url, 
      "This is the title", 
      Math.random().toString(36).substring(7) // Using a random string for description to add randomness
    );
    let threads = await getAllThreads(url);
    console.log({threads})
    let postsComment = await commentOnPostThread(url, threads[0].address, "This is a comment");
    console.log({postsComment})
    dispatch(setCommentFeed(postsComment))
    let memberThread = await createAdminThread(url);
    console.log({memberThread});
	}

	

  const toggleSiderMenu = () => {      
    dispatch(toggleSider(!siderOpen))
  };

  const checkIfRegistered = () => {
    console.log('====================================');
    console.log('onchange', { wallet, provider });
    isDomainRegistered(provider, wallet)
    console.log('====================================');
  }

  return (
    <div className="sticky-header flex">
        <div className="left flex">
            <Avatar size={64} src={`${logoLink}`} />
            <Button  onClick={() => toggleSiderMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="14" viewBox="0 0 28 22">
                    <g id="MENU_BTN" transform="translate(-149 -78)">
                        <rect className="st1" id="Rectangle_20" width="26" height="2" transform="translate(149 78)"/>
                        <rect className="st1" id="Rectangle_21" width="26" height="2" transform="translate(149 88)"/>
                        <rect className="st1" id="Rectangle_22" width="26" height="2" transform="translate(149 98)"/>
                    </g>
                </svg>
            </Button>
        </div>
        <div className="mid">
        <Input
        value={url}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleChange(e)}
        placeholder="Search or type a URL"
        prefix={
            <svg xmlns="http://www.w3.org/2000/svg" width="13.299" height="11.496" viewBox="0 0 23.299 21.496">
            <g id="Group_28" data-name="Group 28" transform="translate(0.707 0)">
                <g id="Ellipse_17" data-name="Ellipse 17" transform="translate(6.601)" fill="none" stroke="#000" strokeWidth="2">
                <circle cx="7.995" cy="7.995" r="7.995" stroke="none"/>
                <circle cx="7.995" cy="7.995" r="6.995" fill="none"/>
                </g>
                <path id="Path_53" data-name="Path 53" d="M1806.381,2219.2l-8.636,8.636" transform="translate(-1797.744 -2207.047)" fill="none" stroke="#000" strokeWidth="2"/>
            </g>
            </svg>
        }
        />
        </div>
        <Button onClick={() => checkIfRegistered()}> check </Button>
        <Button onClick={() => submit()}></Button>
        <div className="right">
            <div className="navbtns">
            <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18.912" height="16" viewBox="0 0 26.434 25">
                <g id="Group_32" data-name="Group 32" transform="translate(-540 -208)">
                    <path id="Path_58" data-name="Path 58" d="M562.036,214.07A11.5,11.5,0,1,1,552.5,209" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/>
                    <path id="Path_59" data-name="Path 59" d="M562.036,214.07" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/>
                    <path id="Path_60" data-name="Path 60" d="M552.5,209" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2"/>
                    <path id="Path_61" data-name="Path 61" d="M557.546,217.66l8.889-5.534-7.766-1.806Z"/>
                </g>
                </svg>
            </Button>
            <Button>
            <svg xmlns="http://www.w3.org/2000/svg" width="11.255" height="16.781" viewBox="0 0 19.255 25.281">
                <path id="Path_54" data-name="Path 54" d="M3484.064,1455.915h17.255v22.18l-8.564-6.955-8.691,6.955Z" transform="translate(-3483.064 -1454.915)" fill="none" stroke="#000" strokeWidth="2"/>
            </svg>
            </Button>
            </div>
        </div>
    </div>
  )
}

export default Nav;
