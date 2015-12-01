package com.music.kpip.service;

import org.junit.Before;
import org.junit.Test;

import junit.framework.Assert;

public class CacheServiceImplUnitTest {

	private CacheService testUnderClass;
	
	@Before
	public void init() {
		testUnderClass = new CacheServiceImpl();
	}
	
	@Test
	public void testGetKeys() {
		testUnderClass.getKeys().forEach(key -> System.out.println(key));		
	}
	
	@Test
	public void testSaveAndGetCache() {
		String test = "blah";
		
		testUnderClass.saveCache(test, "test");

		Assert.assertEquals(test, testUnderClass.getCache("test"));		
		
	}
	
	
}
