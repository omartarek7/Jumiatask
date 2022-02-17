package com.jumia.customers.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import com.jumia.customers.models.CustomerEntity;

public interface CustomerDao {
  Page<CustomerEntity> findCustomersByValidity(Pageable pageable, List<String> patterns, boolean valid);

  Page<CustomerEntity> findCustomersByValidity(Pageable pageable, List<String> patterns, boolean valid, String countryCode);


  String sqlQuery = " SELECT phone,CASE\n" +
            "\t\tWHEN phone REGEXP '\\(237\\)\\ ?[2368]\\d{7,8}$' THEN 'Cameron'\n" +
            "\t\tWHEN  phone REGEXP '\\(251\\)\\ ?[1-59]\\d{8}$' THEN 'Ethiopia'\n" +
            "                           WHEN  phone REGEXP '\\(212\\)\\ ?[5-9]\\d{8}$' THEN 'Morocco'\n" +
            "                           WHEN  phone REGEXP '\\(258\\)\\ ?[28]\\d{7,8}$' THEN 'Mozambique'\n" +
            "                           WHEN  phone REGEXP '\\(256\\)\\ ?\\d{9}$' THEN 'Uganda'\n" +
            "\t\tELSE\n" +
            "\t\t\tnull\n" +
            "\t\tEND AS Country,\n" +
            "  \n" +
            "CASE\n" +
            "\t\tWHEN phone REGEXP '\\(237\\)\\ ?[2368]\\d{7,8}$' THEN 'Valid'\n" +
            "\t\tWHEN  phone REGEXP '\\(251\\)\\ ?[1-59]\\d{8}$' THEN 'Valid'\n" +
            "                           WHEN  phone REGEXP '\\(212\\)\\ ?[5-9]\\d{8}$' THEN 'Valid'\n" +
            "                           WHEN  phone REGEXP '\\(258\\)\\ ?[28]\\d{7,8}$' THEN 'Valid'\n" +
            "                           WHEN  phone REGEXP '\\(256\\)\\ ?\\d{9}$' THEN 'Valid'\n" +
            "\t\tELSE\n" +
            "\t\t\t'Invalid'\n" +
            "\t\tEND AS State,\n" +
            "  CASE\n" +
            "\t\tWHEN phone REGEXP '\\(237\\)\\ ?[2368]\\d{7,8}$' THEN '+237'\n" +
            "\t\tWHEN  phone REGEXP '\\(251\\)\\ ?[1-59]\\d{8}$' THEN '+251'\n" +
            "                           WHEN  phone REGEXP '\\(212\\)\\ ?[5-9]\\d{8}$' THEN '+212'\n" +
            "                           WHEN  phone REGEXP '\\(258\\)\\ ?[28]\\d{7,8}$' THEN '+258'\n" +
            "                           WHEN  phone REGEXP '\\(256\\)\\ ?\\d{9}$' THEN '+256'\n" +
            "\t\tELSE\n" +
            "\t\t\tnull\n" +
            "\t\tEND AS Country_Code\n" +
            "  \n" +
            "FROM\n" +
            "\tcustomer";


    @Query(value = sqlQuery, nativeQuery = true)
    List<Customer> getAllRecordsSql();
}
