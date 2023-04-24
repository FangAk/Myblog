## 来自你的消息:
SELECT DISTINCT t1.ID, pe.executetime, t1.*
FROM yh_block_remove@db51link t1 
LEFT JOIN yh_block_remove_pe@db51link pe 
ON t1.ID = pe.BRID 
WHERE pe.executetime >= to_date('2023/04/01 00:00:00', 'yyyy-mm-dd hh24:mi:ss') 
AND pe.executetime <= to_date('2023/04/24 23:59:59', 'yyyy-mm-dd hh24:mi:ss') 
ORDER BY t1.ID DESC 有问题吗 ？

## 来自ChatAI的消息:
这个SQL查询语句看起来没什么问题，但是需要根据具体情况和实际表结构来确认是否符合需求和是否能正常执行。也要注意SQL注入等安全问题。建议在执行前做好数据备份和测试，以确保查询结果准确无误。

## 来自你的消息:
但是查询出的数据还是有重复

## 来自ChatAI的消息:
如果查询出的数据中存在重复的行，可能是因为多个`yh_block_remove_pe`表中的记录与同一`yh_block_remove`表中的记录匹配。你可以尝试对查询结果使用`DISTINCT`关键字去除重复行。

修改后的SQL语句如下所示：

```sql
SELECT DISTINCT t1.ID, pe.executetime, t1.*
FROM yh_block_remove@db51link t1 
LEFT JOIN yh_block_remove_pe@db51link pe ON t1.ID = pe.BRID 
WHERE pe.executetime >= to_date('2023/04/01 00:00:00', 'yyyy-mm-dd hh24:mi:ss') 
AND pe.executetime <= to_date('2023/04/24 23:59:59', 'yyyy-mm-dd hh24:mi:ss') 
ORDER BY t1.ID DESC
```

如果仍然存在重复行，可能需要对查询条件进行调整，比如添加更加具体的限定条件。

