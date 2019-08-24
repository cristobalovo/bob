import React, { useEffect, useState }  from 'react'
import { useSelector } from 'react-redux';
import Nav from '../../components/shared/nav'
import Sidebar from '../../components/shared/sidebar'
import Browser from '../../components/shared/browser';
import Finance from '../../components/finance';
import { 
  getWalletProvider, 
  getWallet,
  getContractInstance,
  DomainRegistry,
  isUrlInRegistry,
} from '../../service/contracts/shared';


const Home = () => {
  const siderOpen = useSelector(state => state.navigation.siderOpen);
  const searchState = useSelector(state => state.search.currentSearch);
  const [provider, setProvider] = useState({})
  const [wallet, setWallet] = useState({})
  let registryAddress = "0x132efA3675cd66aA2780e01C095e2337188b0F6b";
  // function for if it has been registered & pass it into finance

  useEffect(() => {
    setupUser()
  }, [])


  /**
   * Checks the registry contract if the search string is registered
   * NOTE: hardcode google to verify it returns true
   * @param {*} p 
   * @param {*} w 
   */
  const isDomainRegistered = async (p, w) => {   
    const registryInstance = getContractInstance(DomainRegistry.abi, registryAddress, w.privateKey );
    const isRegistered = await isUrlInRegistry(registryInstance, searchState);
  }

    // sets wallet and provider
    const setupUser = async () => {
      const providerObj = getWalletProvider();
      setProvider(providerObj);
      const walletObj = await getWallet(providerObj);
      setWallet(walletObj);
      isDomainRegistered(providerObj, walletObj);
    }

  return (
    <div className="canvas flex">
      <div className="top">
        <Nav/>
      </div>
      <div className="bottom flex">
        {
          siderOpen ? <Sidebar /> : <Finance />
        }
        <Browser />
      </div>
    </div>
  )
}

export default Home;
