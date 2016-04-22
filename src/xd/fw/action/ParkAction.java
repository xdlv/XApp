package xd.fw.action;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import xd.fw.bean.Mapliceandposition;
import xd.fw.bean.Mappositionandquerypic;
import xd.fw.service.ParkStationService;

import java.util.Map;

@Controller
public class ParkAction extends BaseAction {
    @Autowired
    ParkStationService parkStationService;

    private Mapliceandposition mlp;
    private Mappositionandquerypic mpq;

    private Map<?, ?> slotInfoMap;

    public String obtainSlotInfo() {
        slotInfoMap = parkStationService.getSlotInfo(mlp.getCarlicense(), mpq.getQueryplace());
        return SUCCESS;
    }

    public Map<?, ?> getSlotInfoMap() {
        return slotInfoMap;
    }

    public void setSlotInfoMap(Map<?, ?> slotInfoMap) {
        this.slotInfoMap = slotInfoMap;
    }

    public Mappositionandquerypic getMpq() {
        return mpq;
    }

    public void setMpq(Mappositionandquerypic mpq) {
        this.mpq = mpq;
    }

    public Mapliceandposition getMlp() {
        return mlp;
    }

    public void setMlp(Mapliceandposition mlp) {
        this.mlp = mlp;
    }
}
