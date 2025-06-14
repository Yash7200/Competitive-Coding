#include <stdio.h>
int main(void)
{
    int t,size;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        int count=0;
        scanf("%d",&size);
        char str[size];
        scanf("%s",&str);
        for (int j=0;str[j]!='\0';j++)
        {
            if(str[j]=='1')
            {
                count++;
            }
            else
            {
                break;
            }
        }
        printf("%d\n",count);
    }
	return 0;
}
