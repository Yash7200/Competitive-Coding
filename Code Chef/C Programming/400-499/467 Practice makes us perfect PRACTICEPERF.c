#include <stdio.h>
int main() 
{
    int p1,p2,p3,p4,cnt=0;
    scanf("%d%d%d%d",&p1,&p2,&p3,&p4);
    if(p1>=10)
    {
        cnt++;
    }
    if(p2>=10)
    {
        cnt++;
    }
    if(p3>=10)
    {
        cnt++;
    }
    if(p4>=10)
    {
        cnt++;
    }
    printf("%d\n",cnt);
	return 0;
}