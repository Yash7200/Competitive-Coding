#include<stdio.h>
int main()
{
    int n,i,k,num,cnt=0;
    scanf("%d%d",&n,&k);
    for(i=0;i<n;i++)
    {
        scanf("%d",&num);
        if((num%k)==0)
        {
            cnt++;
        }
    }
    printf("%d\n",cnt);
	return 0;
}
