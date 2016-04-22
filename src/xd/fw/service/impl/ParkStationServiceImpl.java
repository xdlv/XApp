package xd.fw.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xd.fw.bean.mapper.MapliceandpositionMapper;
import xd.fw.service.ParkStationService;

import java.util.Map;
@Service
public class ParkStationServiceImpl extends BaseServiceImpl implements
		ParkStationService {

	@Autowired
	MapliceandpositionMapper mapliceandpositionMapper;

	public Map<?,?> getSlotInfo(String carLicense, int queryPlace){
		return mapliceandpositionMapper.getSlotInfo(carLicense, queryPlace);
	}

}
