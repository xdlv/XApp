package xd.fw.job;

import org.springframework.beans.factory.annotation.Autowired;
import xd.fw.service.MainSerivce;

public class AutoConfirmDzStatus extends BaseJob{

    @Autowired
    MainSerivce mainSerivce;
    public void doExecute() throws Exception{
        logger.info("start to update dz list automatically");
        int updateCount = mainSerivce.updateDzListAutomatic();
        logger.info(String.format("end there are %d records to be updated",updateCount));
    }
}
