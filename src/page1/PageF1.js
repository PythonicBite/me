import Nbar from '../NavxFooter/NavBar';
import PresentationWeb from './Pres';
import SecSectionP from './SecSectionP';
import Foo from '../NavxFooter/Footer';
import TsectionP from './TsectionP';
import { Parallax , ParallaxLayer } from '@react-spring/parallax';

const PageF1 = () => {
    return (
      <div className='bg-white dark:bg-black'>
        
            <Nbar/>
        
            <PresentationWeb/>
        
            <SecSectionP />
          
            <TsectionP />
        
            <Foo /> 
          
        
      </div>
    );
  };
  
  export default PageF1;